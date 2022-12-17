import { openModal } from './utils.js'
/* -------------------------------------------------------------------------- */
/*                            CONSTRUCTOR FOR CARDS                           */
/* -------------------------------------------------------------------------- */

class Card {
  constructor(data, cardSelector) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
  }

  /* -------------------------------------------------------------------------- */
  /*                             SET EVENTLISTENERS                             */
  /* -------------------------------------------------------------------------- */

  _setEventListeners() {
    this._element
      .querySelector('.card__like-button')
      .addEventListener('click', this._handleLikeIcon)

    this._element
      .querySelector('.card__image')
      .addEventListener('click', this._previewModalImage)

    this._element
      .querySelector('.card__trash-button')
      .addEventListener('click', this._handleDeleteCard)
  }

  /* -------------------------------------------------------------------------- */
  /*                           HANDLE AND GET TEMPLATE                          */
  /* -------------------------------------------------------------------------- */

  _previewModalImage = () => {
    const imageModal = document.querySelector('#preview-modal')
    const imageModalImage = imageModal.querySelector('.modal__image')
    imageModalImage.src = this._link
    const imagePreview = imageModal.querySelector('.modal__text')
    imagePreview.textContent = this._name

    openModal(imageModal)
  }

  _handleLikeIcon = () => {
    this._element
      .querySelector('.card__like-button')
      .classList.toggle('card__like-button_is-active')
    // like icon active
  }

  _handleDeleteCard = () => {
    this._element.remove()
    // delete card
  }
  _getTemplate() {
    const cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true)
    return cardEl
  }

  /* -------------------------------------------------------------------------- */
  /*                           RETURN CARDS AND EXPORT                          */
  /* -------------------------------------------------------------------------- */

  getView() {
    this._element = this._getTemplate()

    this._element.querySelector('.card__image').src = this._link
    this._element.querySelector('.card__description-list').textContent =
      this._name
    this._setEventListeners()

    return this._element
  }
}
export default Card
