/* -------------------------------------------------------------------------- */
/*                           CONSTRUCTOR AND CLASSES                          */
/* -------------------------------------------------------------------------- */

class FormValidator {
  constructor(settings, formEl) {
    /* this._formSelector; */
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formEl;
    this._inputEls = settings.inputEls;
    this._inputEl = settings.inputEl;
  }

  /* ---------------------------- ENABLE VALIDATION --------------------------- */

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }

  /* --------------------------------- ERRORS --------------------------------- */

  _showInputError() {
    inputEl.classList.add(options.inputErrorClass);
    const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
    errorEl.textContent = validationMessage;
    errorEl.classList.remove(this._errorClass);
  }

  _hideInputError() {
    inputEl.classList.remove(options.inputErrorClass);

    const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
    errorEl.classList.add(options.errorClass);
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

  _checkInputValidity() {
    if (!inputEl.validity.valid) {
      return showInputError(this._form, inputEl, inputEl.validationMessage);
    }
    hideInputError(this._form, inputEl);
  }

  _hasInvalidInput() {
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  /* ------------------------------ BUTTON CLASS ------------------------------ */

  _toggleButtonState() {
    if (hasInvalidInput(inputEls)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  /* --------------------------- SET EVENTLISTENERS --------------------------- */

  _setEventListeners() {
    /* const { inputSelector } = options; */
    this.inputEls = [...this._form.querySelectorAll(this._inputSelector)];

    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._submitButton.disabled = true;
    this._inputEls.forEach(this._inputEls);
    this._inputEls.addEventListener("input", (evt) => {
      this._toggleInputError(this._form, this._inputEls);

      this._toggleButtonState(this._inputEls, this._submitButton);
    });
  }
}

/* ------------------------- EXPORTING FORMVALIDATOR ------------------------ */

export default FormValidator;
