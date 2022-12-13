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
    const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this_.inputErrorClass);
    errorEl.textContent = this._validationMessage;
    errorEl.classList.remove(this_.errorClass);
  }

  _hideInputError() {
    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this_.inputErrorClass);
    errorEl.classList.add(this_.errorClass);
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

  _toggleInputError(inputEl) {}

  _hasInvalidInput() {
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  /* ------------------------------ BUTTON CLASS ------------------------------ */

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  /* --------------------------- SET EVENTLISTENERS --------------------------- */

  _setEventListeners() {
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (evt) => {
        this._toggleInputError(inputEl);
        this._toggleButtonState();
      });
    });
  }
}
export default FormValidator;
