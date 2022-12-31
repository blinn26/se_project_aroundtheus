import Popup from './popup.js'
class PopupWithImage extends Popup {
  open({ link, name }) {
    this._popupElement.querySelector('popup__caption').textContent = name
    const image = this._popupElement.querySelector('.popup__image')
    image.src = link
    image.alt = `blank ${name}`
    super.open()
  }
}

export default PopupWithImage
