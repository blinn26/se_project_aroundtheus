/* -------------------------------------------------------------------------- */
/*             IMPORTING FORMVALIDATOR AND CARDS TO SCRIPTS FOR JS            */
/* -------------------------------------------------------------------------- */
import './index.css'
import FormValidator from '../components/FormValidator.js'
import UserInfo from '../components/UserInfo.js'
import { config, selectors } from '../utils/constants.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Api from '../utils/Api'

/* -------------------------------------------------------------------------- */
/*                               CARDS COMMANDS                               */
/* -------------------------------------------------------------------------- */

const cardTemplate =
  document.querySelector('#card-template').content.firstElementChild
const cardListEl = document.querySelector('.cards__list')

/* -------------------------------------------------------------------------- */
/*           PROFILE BUTTONS PROFILE FORMS MODAL BUTTONS MODAL FORMS          */
/* -------------------------------------------------------------------------- */

const profileEditModal = document.querySelector('#edit-modal')
const cardAddModal = document.querySelector('#add-modal')
const profileEditButton = document.querySelector('.profile__edit-button')
const cardModalOpenButton = document.querySelector('.profile__add-button')
const profileModalCloseButton = profileEditModal.querySelector(
  '.modal__close-button'
)
const addModalCloseButton = cardAddModal.querySelector('.modal__close-button')
const addCardSave = cardAddModal.querySelector(config.submitButtonSelector)
const profileModal = document.querySelector('.modal')
const profileEditForm = profileModal.querySelector('.modal__form')
const modalTitleForm = profileModal.querySelector('#modal__form-title')
const modalLinkForm = profileModal.querySelector('#modal__form-link')
const previewModal = document.getElementById('preview-modal')
const previewTextModal = document.querySelector('.modal__text ')
const profileTitle = document.querySelector('.profile__title ')
const profileDescription = document.querySelector('.profile__description')
const profileNameInput = profileEditForm.querySelector('.modal__input-line')
const profileDescriptionInput = profileEditForm.querySelector(
  '.modal__input-description'
)
/* -------------------------------------------------------------------------- */
/*            PROFILESELECTOR AND PROFILEDESCRIPTION MODAL SELECTOR           */
/* -------------------------------------------------------------------------- */

const userInfo = new UserInfo({
  profileNameSelector: config.profileNameSelector,
  profileDescriptionSelector: config.profileDescriptionSelector,
})

/* -------------------------------------------------------------------------- */
/*                  ENABLE FORMVALIDATION FROM FORMVALIDATOR                  */
/* -------------------------------------------------------------------------- */

const editFormValidator = new FormValidator(config, profileEditForm)

const addCardValidator = new FormValidator(config, cardAddModal)

editFormValidator.enableValidation()

addCardValidator.enableValidation()

/* -------------------------------------------------------------------------- */
/*                       BOTH POPUP MODALS AND PREVIEWS                       */
/* -------------------------------------------------------------------------- */

const addPopupWithImage = new PopupWithImage('#preview-modal')
addPopupWithImage.setEventListeners()
const addCardPopup = new PopupWithForm({
  popupSelector: '#add-modal',
  handleFormSubmit: (data) => {
    const card = createCard(data)
    cardSection.addItem(card)
    addCardPopup.close()
  },
})

addCardPopup.setEventListeners()

const userInfoPopup = new PopupWithForm({
  popupSelector: '#edit-modal',

  handleFormSubmit: (data) => {
    userInfo.setProfileInfo(data.name, data.description)
  },
})
userInfoPopup.setEventListeners()

profileEditButton.addEventListener('click', () => {
  const profileInfo = userInfo.getProfileInfo()
  profileNameInput.value = profileInfo.name
  profileDescriptionInput.value = profileInfo.description

  userInfoPopup.open()
})

/* -------------------------------------------------------------------------- */
/*                            CREATE CARD FUNCTION                            */
/* -------------------------------------------------------------------------- */

function createCard(item) {
  const card = new Card(
    {
      data: item,
      handCardClick: (data) => {
        addPopupWithImage.open(data)
      },
    },
    selectors.cardTemplate
  )
  return card.getView()
}

Api.getInitialCards().then((initialCards) => {
  const cardSection = new Section(
    {
      items: initialCards,
      renderer: (data) => {
        const card = createCard(data)

        cardSection.addItem(card)
      },
    },
    selectors.cardSection
  )
  cardSection.renderItems() //This is what renders the cards
})

/* -------------------------------------------------------------------------- */
/*        CARD MODAL TITLE AND LINK AND PROFILE OPEN AND CLOSE BUTTONS        */
/* -------------------------------------------------------------------------- */

const handleAddCard = (evt) => {
  evt.preventDefault()
  const name = evt.target.title.value
  const link = evt.target.link.value

  closeModal(cardAddModal)
}

cardModalOpenButton.addEventListener('click', () => {
  addCardValidator.resetValidation()

  addCardPopup.open()
})
