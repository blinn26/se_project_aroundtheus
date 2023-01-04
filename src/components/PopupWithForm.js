import Popup from './Popup.js'

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)

    this._modalForm = this._popupElement.querySelector('.modal__form')
    this._handleFormSubmit = handleFormSubmit
  }
  _getInputValues() {
    const inputs = this._modalForm.querySelectorAll('.modal__input')

    const formValues = {}

    inputs.forEach((input) => {
      formValues[input.name] = input.value
    })

    return formValues
  }
  _close() {
    this._modalForm.reset()

    super.close()
  }

  setEventListeners() {
    this._modalForm.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues())
      this._close()
    })
  }
}

export default PopupWithForm
