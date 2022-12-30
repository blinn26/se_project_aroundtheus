import { ESC_KEYCODE } from '../utils/constants.js'
class popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscUp = this._handleEscUp.bind(this)
  }

  _handleEscUp(evt) {
    evt.preventDefault()

    if (evt.which === ESC_KEYCODE) {
      this.close()
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (
        evt.target.classList.contains('popup') ||
        evt.target.classList.contains('close-popup')
      ) {
        this.close()
      }
    })
  }
}
