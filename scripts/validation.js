// enabling validation by calling enableValidation()
// pass all the settings on call
function setEventListeners(formEl, options) {
    const { inputSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", (inputEl) => {
            console.log(inputEl);
        });
    });


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
        submitButtonSelector: ".modal__button",
        inactiveButtonClass: "modal__button_disabled",
        inputErrorClass: "modal__input_type_error",
        errorClass: "modal__error_visible",
    };
    enableValidation(config);
}