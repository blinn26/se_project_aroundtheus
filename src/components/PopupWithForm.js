import Popup from './Popup.js'

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)

    this._modalForm = this._popupElement.querySelector('.modal__form')
    this._handleFormSubmit = handleFormSubmit
  }
  _getInputValues() {}
  setEventListeners() {
    this._modalForm.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handformSubmit(this._getInputValues())

      {
        name: 'Ben'
        about: 'Softwear Dev'
      }
    })
  }
  close() {
    this_modalForm.reset()

    super.close()
  }
}

export default PopupWithForm
