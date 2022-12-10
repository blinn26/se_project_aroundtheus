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
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(formEl, options);
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

  _hideInputError() {
    inputEl.classList.remove(options.inputErrorClass);

    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorEl.classList.add(options.errorClass);
  }

  _hasInvalidInput() {
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  _checkInputValidity() {
    if (!inputEl.validity.valid) {
      return showInputError(
        formEl,
        inputEl,
        options,
        inputEl.validationMessage
      );
    }
    hideInputError(formEl, inputEl, options);
  }

  _setEventListeners() {
    /* const { inputSelector } = options; */
    this.inputEls = [...this._form.querySelectorAll(this._inputSelector)];

    this.submitButton = this._form.querySelector(this._submitButtonSelector);
    submitButton.disabled = true;
    this.inputEls.forEach((inputEls) => {
      this.inputEls.addEventListener("input", (evt) => {
        toggleInputError(form, inputEls, options);

        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }
}
export default FormValidator;
