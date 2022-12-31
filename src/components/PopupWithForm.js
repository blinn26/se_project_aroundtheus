import Popup from './popup.js'

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)

    this._modalForm = this._popupElement.querySelector('modal__form')
    this._handleFormSubmit = handleFormSubmit
  }
  _getInputValues() {}
  setEventListeners() {}

  close() {
    this_modalForm.reset()

    super.close()
  }
}

export default PopupWithForm
