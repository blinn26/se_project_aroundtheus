// enabling validation by calling enableValidation()o
// pass all the settings on call

function showInputError(formEl, inputEl, options) {
  inputEl.classList.add(options.inputErrorClass);
  const errorEl = formEl.querySelector(`#${inputEl.name}-error`);
  errorEl.classList.remove(options.errorClass);
}

function hideInputError(formEl, inputEl, options) {
  inputEl.classList.remove(options.inputErrorClass);
  const errorEl = formEl.querySelector(`#${inputEl.name}-error`);
  // "hello, " + userName => "hello, Josh"
  // const userName = "Josh"
  // `http://${domainName}/{backendEndpoint}/users/${userId}`
  errorEl.classList.add(options.errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
}

function setEventListeners(formEl, options) {
  console.log("hi");
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (inputEvt) => {
      checkInputValidity(formEl, inputEl, options);
    });
  });
}
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
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

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-hidden",
};
enableValidation(config);
