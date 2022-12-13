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
    errorel.textContent = "";
    errorEl.classList.add(this_.errorClass);
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

  _toggleInputError(inputEl) if(!inputEl.validity.valid) {
    return showInputError(this._form, inputEl, inputEl.validationMessage);
  }

  _hasInvalidInput() {
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }
 this._hideInputError(inputEl)
  /* ------------------------------ BUTTON CLASS ------------------------------ */

  _toggleButtonState() {
    if (this._hasInvalidInput(inputEl)) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }

  /* --------------------------- SET EVENTLISTENERS --------------------------- */

  _setEventListeners() {
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (evt) => {
        hasInvalidInput();
        this._toggleButtonState();
      });
    });
    this._form.addEventListener("reset", () => {
      setTimeout((0) => {
        this._toggleButtonState();
      }, timeout);
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
