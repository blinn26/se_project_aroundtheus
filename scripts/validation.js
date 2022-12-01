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

function checkFieldsValidity() {
  // ...

  return false; //true
}

function toggleButtonState(
  inputEls,

  submitButtonSelector,

  { inactiveButtonClass }
) {
  let hasInvalidInput = false;

  // if the function has name toggleButtonState, why the hell it checks if the form is valid?
  inputEls.forEach((inputEl) => {
    // inputEls.every...
    // instead of forEach use every
    if (!inputEl.validity.valid) {
      hasInvalidInput = true;
    }
  });

  if (checkFieldsValidity()) {
  }
  if (hasInvalidInput) {
    submitButtonSelector.classList.add(inactiveButtonClass);

    submitButtonSelector.disabled = true;
  } else {
    submitButtonSelector.classList.remove(inactiveButtonClass);

    submitButtonSelector.disabled = false;
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButtonSelector = formEl.querySelector(".modal__save-button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      toggleInputError(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButtonSelector, options);
    });
  });
}
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const submitButtonSelector = formEl.querySelector(".modal__save-button");
    submitButtonSelector.disabled = true;

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

enableValidation(config);
