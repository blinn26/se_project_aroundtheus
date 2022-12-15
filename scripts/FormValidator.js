/* -------------------------------------------------------------------------- */
/*                           CONSTRUCTOR AND CLASSES                          */
/* -------------------------------------------------------------------------- */

class FormValidator {
  constructor(settings, formEl) {
    /* this._formSelector; */
    this._inputSelector = settings.inputSelector
    this._submitButtonSelector = settings.submitButtonSelector
    this._inactiveButtonClass = settings.inactiveButtonClass
    this._inputErrorClass = settings.inputErrorClass
    this._errorClass = settings.errorClass
    this._form = formEl
  }

  /* --------------------------------- ERRORS --------------------------------- */

  _showInputError(inputEl) {
    const errorEl = this._form.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.add(this._inputErrorClass)
    errorEl.textContent = inputEl.validationMessage
    errorEl.classList.remove(this._errorClass)
  }

  _hideInputError(inputEl) {
    const errorEl = this._form.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.remove(this._inputErrorClass)
    errorEl.textContent = ''
    errorEl.classList.add(this._errorClass)
  }

  /* ----------------------------- CHECK VALIDATY ----------------------------- */

  _hasInvalidInput(inputEl) {
    /* const inputEls = [...this._form.querySelectorAll(this._inputSelector)] */
    /* return !inputEls.every((inputEl) => inputEl.validity.valid) */
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl)
    } else {
      this._hideInputError(inputEl)
    }
  }

  /* ------------------------------ BUTTON CLASS ------------------------------ */

  toggleButtonState() {
    if (this._isFormValid()) {
      this._submitButtonEl.classList.remove(this._inactiveButtonClass)
      this._submitButtonEl.disabled = false
    } else {
      this._submitButtonEl.classList.add(this._inactiveButtonClass)
      this._submitButtonEl.disabled = true
    }
  }

  _isFormValid() {
    return this._inputEls.every((inputEl) => {
      return inputEl.validity.valid
    })
  }

  /* --------------------------- SET EVENTLISTENERS --------------------------- */

  _setEventListeners() {
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)]
    this._submitButtonEl = this._form.querySelector(this._submitButtonSelector)
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener('input', (evt) => {
        this._hasInvalidInput(inputEl)
        this.toggleButtonState()
      })
    })
  }
  /* ---------------------------- ENABLE VALIDATION --------------------------- */

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })

    this._setEventListeners()
  }
}
export default FormValidator
