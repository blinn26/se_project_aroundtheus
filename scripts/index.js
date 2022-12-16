/* -------------------------------------------------------------------------- */
/*             IMPORTING FORMVALIDATOR AND CARDS TO SCRIPTS FOR JS            */
/* -------------------------------------------------------------------------- */

import FormValidator from './FormValidator.js'
import { handleEscUp } from './utils.js'
import Card from './card.js'

/* -------------------------------------------------------------------------- */
/*                             INTIAL CARDS ARRAY                             */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
]

/* -------------------------------------------------------------------------- */
/*                                CONFIG STRING                               */
/* -------------------------------------------------------------------------- */
const config = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-button',
  inactiveButtonClass: 'modal__button-disabled',
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__error-hidden',
}

/* -------------------------------------------------------------------------- */
/*                               CARDS COMMANDS                               */
/* -------------------------------------------------------------------------- */

const cardTemplate =
  document.querySelector('#card-template').content.firstElementChild
const cardListEl = document.querySelector('.cards__list')
/* const cardSelector = "#card-template"; */
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
/*                  ENABLE FORMVALIDATION FROM FORMVALIDATOR                  */
/* -------------------------------------------------------------------------- */

const editFormValidator = new FormValidator(config, profileEditForm)

const addCardValidator = new FormValidator(config, cardAddModal)

editFormValidator.enableValidation()

addCardValidator.enableValidation()
/* -------------------------------------------------------------------------- */
/*            ESCAPE HANDLER KEYUP AND CLICK FOR MODAL AND PREIVEW            */
/* -------------------------------------------------------------------------- */

function clickOutCloseModal(evt) {
  if (evt.target.classList.contains('modal')) {
    const activePopup = document.querySelector('.modal_opened')

    closeModal(activePopup)
  }
}

function escapeHandler(evt) {
  handleEscUp(evt, closeModal)
}

const openModal = (openModal) => {
  document.addEventListener('mousedown', clickOutCloseModal)
  openModal.classList.add('modal_opened')

  document.addEventListener('keyup', escapeHandler)
}

const closeModal = (openModal) => {
  openModal.classList.remove('modal_opened')
  document.removeEventListener('keyup', escapeHandler)
  document.removeEventListener('mousedown', clickOutCloseModal)
}

/* -------------------------------------------------------------------------- */
/*                      CREATE CARD, RENDER CARD AND LOOP                     */
/* -------------------------------------------------------------------------- */

function renderCard(cardData) {
  const card = new Card(cardData, '#card-template')
  cardListEl.prepend(card.getView())
}

initialCards.forEach(renderCard)

/* -------------------------------------------------------------------------- */
/*             EDIT PROFILE SETTINGS/OPEN/CLOSE/TITLE/DESCRIPTION             */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit(event) {
  event.preventDefault()

  profileTitle.textContent = profileNameInput.value
  profileDescription.textContent = profileDescriptionInput.value

  closeModal(profileEditModal)
}

profileEditForm.addEventListener('submit', handleProfileFormSubmit)
profileEditButton.addEventListener('click', () => {
  profileNameInput.value = profileTitle.textContent
  profileDescriptionInput.value = profileDescription.textContent
  openModal(profileEditModal)
})

/* -------------------------------------------------------------------------- */
/*                               ADD CUSTOM CARD                              */
/* -------------------------------------------------------------------------- */

const handleAddCard = (evt) => {
  evt.preventDefault()
  const name = evt.target.name.value
  const link = evt.target.link.value
  renderCard({
    name: name,
    link: link,
  })

  evt.target.reset()
  const inputEls = [...cardAddModal.querySelectorAll('.modal__input')]

  closeModal(cardAddModal)
}

cardModalOpenButton.addEventListener('click', () => {
  addCardValidator.resetValidation()
  openModal(cardAddModal)
})

/* -------------------------------------------------------------------------- */
/*                                Close Buttons                               */
/* -------------------------------------------------------------------------- */
profileModalCloseButton.addEventListener('click', () =>
  closeModal(profileEditModal)
)

addModalCloseButton.addEventListener('click', () => closeModal(cardAddModal))
cardAddModal.addEventListener('submit', handleAddCard)
const previewCloseButton = previewModal.querySelector('#preview-modal-close')
previewCloseButton.addEventListener('click', () => closeModal(previewModal))
