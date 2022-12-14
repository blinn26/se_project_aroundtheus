/* -------------------------------------------------------------------------- */
/*                            INTIAL CARDS DISPLAY                            */
/* -------------------------------------------------------------------------- */

export const initialCards = [
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
/*           EXPORTING SELECTORS, BUTTONS, CLASSES, CARDS AND FORMS           */
/* -------------------------------------------------------------------------- */

export const config = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-button',
  inactiveButtonClass: 'modal__button-disabled',
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__error-hidden',
  profileNameSelector: '.profile__title',
  profileDescriptionSelector: '.profile__description',
}

export const selectors = {
  cardSection: '.cards__list',
  cardTemplate: '#card-template',
  cardModalAdd: 'add__modal',
}
