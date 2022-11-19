// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formEl, options) {
    const { inputSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    inputEls.forEach(inputEl => {
        inputEl.addEventListener("input", () => console.log("input ran"))
    })

}

function enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
        formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formEl, options);
        // look for all inputs inside of form
        // loop through all ther inputs to see if all are valid
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
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};
enableValidation(config);