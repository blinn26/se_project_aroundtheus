import Popup from './popup.js'
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._imageModal = this._popupElement.querySelector('#preview-modal')
    this._textTitle = this._popupElement.querySelector('modal__text')
  }
  openModal({ link, name }) {
    this._popupElement.querySelector('popup__caption').textContent = name
    const image = this._popupElement.querySelector('.popup__image')
    this._imageModal.src = link
    this._imageModal.alt = name
    this._textTitle.textContent = name
    super.openModal()
  }
}

export default PopupWithImage
