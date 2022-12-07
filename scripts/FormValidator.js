class FormValidator {
  constructor(settings, formEl) {
    this._formSelector;
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
    const { inputSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];

    const submitButton = formEl.querySelector(options.submitButtonSelector);
    submitButton.disabled = true;
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        toggleInputError(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl, options);
  }
}
const editFormValidator = new FormValidator();
editFormValidator.enableValidation();
