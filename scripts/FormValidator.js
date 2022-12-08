class FormValidator {
  constructor(settings, formEl) {
    /* this._formSelector; */
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formEl;
  }

  _showInputError() {
    inputEl.classList.add(options.inputErrorClass);
    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorEl.textContent = validationMessage;
    errorEl.classList.remove(options.errorClass);
  }

  _toggleButtonState() {
    if (hasInvalidInput(inputEls)) {
      submitButtonEl.classList.add(inactiveButtonClass);
      submitButtonEl.disabled = true;
    } else {
      submitButtonEl.classList.remove(inactiveButtonClass);
      submitButtonEl.disabled = false;
    }
  }

  _hasInvalidInput() {
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  _setEventListeners() {
    /* const { inputSelector } = options; */
    this.inputEls = [...this._form.querySelectorAll(this._inputSelector)];

    const submitButton = this._form.querySelector(this._submitButtonSelector);
    submitButton.disabled = true;
    this.inputEls.forEach((inputEls) => {
      inputEls.addEventListener("input", (evt) => {
        toggleInputError(this._form, this._inputEls, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation() {
    console.log(this);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}
export default FormValidator;
