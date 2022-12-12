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
    const errorEl = this._form.querySelector(
      `#${this._inputSelector.id}-error`
    );
    this._inputSelector.classList.add(this._inputErrorClass);

    errorEl.textContent = this._inputSelector.validationMessage;
    errorEl.classList.remove(this._inputErrorClass);
  }

  _hideInputError() {
    const errorEl = this._form.querySelector(
      `#${this._inputSelector.id}-error`
    );
    errorEl.classList.add(options.errorClass);

    errorEl.classList.remove(options.inputErrorClass);
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

  _toggleInputError() {
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
