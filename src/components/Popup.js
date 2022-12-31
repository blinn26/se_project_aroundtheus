import { ESC_KEYCODE } from '../utils/constants.js'
class popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscUp = this._handleEscUp.bind(this)
  }

  _handleEscUp(evt) {
    evt.preventDefault()

    if (evt.which === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (
        evt.target.classList.contains('modal') ||
        evt.target.classList.contains('closeModal')
      ) {
        this.close()
      }
    })
  }

  open() {
    this._popupElement.classList.add('modal_opened')
    this._popupElement.addEventListener('keydown', this._handleEscUp)
  }

  close() {
    this._popupElement.classList.remove('modal_opened')
    document.removeEventListener('keyup', this._handleEscUp)
  }
}

export default popup
