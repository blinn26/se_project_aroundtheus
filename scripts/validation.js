function showInputError(formEl, inputEl, options, validationMessage) {
  /* console.log(`#${inputEl.name}-error`); */
  inputEl.classList.add(options.inputErrorClass);
  const errorEl = formEl.querySelector(`#${inputEl.name}-error`);
  errorEl.textContent = validationMessage;
  errorEl.classList.remove(options.errorClass);
}

function hideInputError(formEl, inputEl, options) {
  inputEl.classList.remove(options.inputErrorClass);
  console.log(formEl);
  const errorEl = formEl.querySelector(`#${inputEl.name}-error`);
  errorEl.classList.add(options.errorClass);
}
function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, options, inputEl.validationMessage);
  }
  hideInputError(formEl, inputEl, options);

  function hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
    console.log("hasInvalidInput");
  }
}

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  let hasInvalidInput = false;
  inputEls.forEach((inputEl) => {
    if (!inputEl.validity.valid) {
      hasInvalidInput = true;
    }
  });

  if (hasInvalidInput) {
    submitButton.classList.add(inactiveButtonClass);
    return (submitButton.disabled = true);
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".modal__save-button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      console.log(e.target.value);
      checkInputValidity(formEl, inputEl, options);
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

/* const enableValidation = ({ formSelector, ...rest }) => {
  const getFormList = [...document.querySelectorAll(formSelector)];
  getFormList.forEach((formEl) => {
    formEl.addEventListener("sumbmit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formEl, rest);
  });
}; */

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-hidden",
});
