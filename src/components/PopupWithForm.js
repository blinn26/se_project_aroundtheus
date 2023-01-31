import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);

    this._modalForm = this._popupElement.querySelector('.modal__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setLoading(isLoading, submitSave) {
    if (isLoading) {
      this._popupElement.querySelector('.modal__save-button').textContent = 'Saving...';
    } else {
      this._popupElement.querySelector('.modal__save-button').textContent = submitSave;
    }
  }

  _getInputValues() {
    const inputs = this._modalForm.querySelectorAll('.modal__input'); //TODO: reuse selector from config

    const formValues = {};

    inputs.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }
  close() {
    this._modalForm.reset();

    super.close();
  }

  setEventListeners() {
    this._modalForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}

export default PopupWithForm;
