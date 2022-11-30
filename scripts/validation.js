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
function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, options, inputEl.validationMessage);
  }
  hideInputError(formEl, inputEl, options);

  /* function checkInputValidity(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);} */
}

function toggleButtonState(
  inputEls,
  submitButtonSelector,
  { inactiveButtonClass }
) {
  let hasInvalidInput = false;
  inputEls.forEach((inputEl) => {
    if (!inputEl.validity.valid) {
      hasInvalidInput = true;
    }
  });

  if (hasInvalidInput) {
    submitButtonSelector.classList.add(inactiveButtonClass);
    submitButtonSelector.disabled = true;
  } else {
    submitButtonSelector.classList.remove(inactiveButtonClass);
    submitButtonSelector.disabled = false;
  }
  console.log("finished submit");
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButtonSelector = formEl.querySelector(".modal__save-button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
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

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button-disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-hidden",
});
