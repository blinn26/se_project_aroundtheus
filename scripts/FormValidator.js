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

  /* --------------------------------- ERRORS --------------------------------- */

  _showInputError() {
    const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this_.inputErrorClass);
    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.remove(this_.errorClass);
  }

  _hideInputError() {
    const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this_.inputErrorClass);
    errorEl.textContent = "";
    errorEl.classList.add(this_.errorClass);
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

  _hasInvalidInput() {
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  /* ------------------------------ BUTTON CLASS ------------------------------ */

  toggleButtonState(inputEl) {
    if (this._hasInvalidInput(inputEl)) {
      console.log(inputEl);
      this._submitButtonEl.classList.add(this._inactiveButtonClass);
      this._submitButtonEl.disabled = true;
    } else {
      this._submitButtonEl.classList.remove(this._inactiveButtonClass);
      this._submitButtonEl.disabled = false;
    }
  }

  /* --------------------------- SET EVENTLISTENERS --------------------------- */

  _setEventListeners() {
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButtonEl = this._form.querySelectorAll(
      this._submitButtonSelector
    );
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (evt) => {
        this._hasInvalidInput(inputEl);
      });
    });
  }
  /* ---------------------------- ENABLE VALIDATION --------------------------- */

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}
export default FormValidator;
