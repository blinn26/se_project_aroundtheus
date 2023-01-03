/* -------------------------------------------------------------------------- */
/*             IMPORTING FORMVALIDATOR AND CARDS TO SCRIPTS FOR JS            */
/* -------------------------------------------------------------------------- */
import '../pages/index.css'
import FormValidator from '../components/FormValidator.js'
import { openModal, closeModal } from '../utils/utils.js'
import UserInfo from '../components/UserInfo.js'
import { initialCards, config, selectors } from '../utils/constants.js'
import Popup from '../components/Popup.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'

/* -------------------------------------------------------------------------- */
/*                               CARDS COMMANDS                               */
/* -------------------------------------------------------------------------- */

const cardTemplate =
  document.querySelector('#card-template').content.firstElementChild
const cardListEl = document.querySelector('.cards__list')

/* -------------------------------------------------------------------------- */
/*                            ID LABELED WITH MODAL                            */
/* -------------------------------------------------------------------------- */

const profileEditModal = document.querySelector('#edit-modal')
const cardAddModal = document.querySelector('#add-modal')
/* -------------------------------------------------------------------------- */
/*                          PROFILE AND MODAL BUTTONS                         */
/* -------------------------------------------------------------------------- */

const profileEditButton = document.querySelector('.profile__edit-button')
const cardModalOpenButton = document.querySelector('.profile__add-button')
const profileModalCloseButton = profileEditModal.querySelector(
  '.modal__close-button'
)

const addModalCloseButton = cardAddModal.querySelector('.modal__close-button')
const addCardSave = cardAddModal.querySelector(config.submitButtonSelector)
/* -------------------------------------------------------------------------- */
/*                           MODAL AND PROFILE FORMS                          */
/* -------------------------------------------------------------------------- */
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
/*                                 REFACTERING                                */
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

const addCardPopup = new PopupWithForm({
  popupSelector: '#add-modal',
  handleFormSubmit: (data) => {
    renderCard(data)
    addCardPopup.close()
  },
})

addCardPopup.setEventListeners()

profileEditButton.addEventListener('click', () => {
  profileNameInput.value = profileTitle.textContent
  profileDescriptionInput.value = profileDescription.textContent
  openModal(profileEditModal)
})
const userInfoPopup = new PopupWithForm({
  popupSelector: '#edit-modal',

  handleFormSubmit: (data) => {
    console.log(data)
    userInfo.setProfileInfo(data.name, data.description)
  },
})
/* -------------------------------------------------------------------------- */
/*                               ADD CUSTOM CARD                              */
/* -------------------------------------------------------------------------- */

const handleAddCard = (evt) => {
  evt.preventDefault()
  const name = evt.target.title.value
  const link = evt.target.link.value
  renderCard({
    name: name,
    link: link,
  })

  evt.target.reset()
  /* const inputEls = [...cardAddModal.querySelectorAll('.modal__input')] */

  closeModal(cardAddModal)
}

cardModalOpenButton.addEventListener('click', () => {
  addCardValidator.resetValidation()
  /* openModal(cardAddModal) */
  addCardPopup.open()
})

/* -------------------------------------------------------------------------- */
/*                      CREATE CARD, RENDER CARD AND LOOP                     */
/* -------------------------------------------------------------------------- */

function renderCard(cardData) {
  const card = new Card(cardData, '#card-template')
  cardListEl.prepend(card.getView())
}

initialCards.forEach(renderCard)
/* -------------------------------------------------------------------------- */
/*                                Close Buttons                               */
/* -------------------------------------------------------------------------- */
profileModalCloseButton.addEventListener('click', () => {
  closeModal(profileEditModal)
})

addModalCloseButton.addEventListener('click', () => closeModal(cardAddModal))
cardAddModal.addEventListener('submit', handleAddCard)
const previewCloseButton = previewModal.querySelector('#preview-modal-close')
previewCloseButton.addEventListener('click', () => closeModal(previewModal))

/* const CardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = new Card(item, selectors.cardTemplate)
      CardSection.addItem(cardEl.getView())
    },
  },
  selectors.cardSection
)

CardSection.renderItems(initialCards) */
