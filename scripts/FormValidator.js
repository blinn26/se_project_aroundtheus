/* -------------------------------------------------------------------------- */
/*                           CONSTRUCTOR AND CLASSES                          */
/* -------------------------------------------------------------------------- */

class FormValidator {
  constructor(settings, formEl) {
    /* this._formSelector; */
    this._inputSelector = settings.inputSelector;
    //this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formEl;
    this._config = settings;
  }

  /* ---------------------------- ENABLE VALIDATION --------------------------- */

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(); // this function receives 2 arguments
  }

  /* --------------------------------- ERRORS --------------------------------- */

  _showInputError() {
    inputEl.classList.add(options.inputErrorClass);
    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorEl.textContent = validationMessage;
    errorEl.classList.remove(options.errorClass);
  }

  _hideInputError() {
    inputEl.classList.remove(options.inputErrorClass);

    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorEl.classList.add(options.errorClass);
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

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

  _hasInvalidInput() {
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  /* ------------------------------ BUTTON CLASS ------------------------------ */

  _toggleButtonState() {
    if (hasInvalidInput(inputEls)) {
      submitButtonEl.classList.add(inactiveButtonClass);
      submitButtonEl.disabled = true;
    } else {
      submitButtonEl.classList.remove(inactiveButtonClass);
      submitButtonEl.disabled = false;
    }
  }

  /* --------------------------- SET EVENTLISTENERS --------------------------- */

  _setEventListeners() {
    // how many anrguments it really expects?
    /* const { inputSelector } = options; */
    this.inputEls = [...this._form.querySelectorAll(this._inputSelector)];

    const submitButton = this._form.querySelector(
      this._config.submitButtonSelector
    );

    submitButton.disabled = true;

    this.inputEl.forEach((inputEl) => {
      inputEl.addEventListener("input", (evt) => {
        toggleInputError(form, inputEls, options);

        toggleButtonState(inputEls, submitButton, this._config);
      });
    });
  }
}

/* ------------------------- EXPORTING FORMVALIDATOR ------------------------ */

export default FormValidator;
