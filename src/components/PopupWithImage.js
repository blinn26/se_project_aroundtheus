import Popup from './popup.js'
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._imageModalPreview = this._popupElement.querySelector('.modal__image')
    this._textTitlePreview = this._popupElement.querySelector('.modal__text')
  }
  openModal({ link, name }) {
    /*  this._popupElement.querySelector('modal__text').textContent = name
    const PopupWithImage = this._popupElement.querySelector('.modal__image') */

    this._imageModalPreview.src = link
    this._imageModalPreview.alt = name
    this._textTitlePreview.textContent = name
    super.openModal()
  }
}

export default PopupWithImage
