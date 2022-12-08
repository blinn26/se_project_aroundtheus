/* -------------------------------------------------------------------------- */
/*                         VALIDATE ERRORS FOR INPUTS                         */
/* -------------------------------------------------------------------------- */

function showInputError(formEl, inputEl, options, validationMessage) {
  inputEl.classList.add(options.inputErrorClass);
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = validationMessage;
  errorEl.classList.remove(options.errorClass);
}

function hideInputError(formEl, inputEl, options) {
  inputEl.classList.remove(options.inputErrorClass);
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.classList.add(options.errorClass);
}
function toggleInputError(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, options, inputEl.validationMessage);
  }
  hideInputError(formEl, inputEl, options);

  /* function toggleInputError(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);} */
}
function toggleInputError(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, options, inputEl.validationMessage);
  }

  hideInputError(formEl, inputEl, options);

  /* function toggleInputError(inputList) { 

    return !inputList.every((inputEl) => inputEl.validity.valid);} */
}

function toggleButtonState(inputEls, submitButtonEl, { inactiveButtonClass }) {
  if (hasInvalidInput(inputEls)) {
    submitButtonEl.classList.add(inactiveButtonClass);
    submitButtonEl.disabled = true;
  } else {
    submitButtonEl.classList.remove(inactiveButtonClass);
    submitButtonEl.disabled = false;
  }

  function hasInvalidInput(inputEls) {
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  // const submitButtonSelector = formEl.querySelector(".modal__save-button");
  const submitButton = formEl.querySelector(options.submitButtonSelector);
  submitButton.disabled = true;
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      toggleInputError(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, options);
    // look for all inputs inside of form
    // loop through all there inputs to see if all are valid
    // get validation message
    // add error class to input
    // display error message
    // disable button
    // if all inputs are valid
    // enable button
    // reset error message
  });
}

/* -------------------------------------------------------------------------- */
/*                        ENABLE VALIDATION FOR STRINGS                       */
/* -------------------------------------------------------------------------- */

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__button-disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-hidden",
};
enableValidation(config);
