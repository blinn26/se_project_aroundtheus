// enabling validation by calling enableValidation()
// pass all the settings on call

function enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
        console.log(formEl);
        formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

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
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};
enableValidation(config);