/* -------------------------------------------------------------------------- */
/*                         ESCAPE EVENT OPEN AND CLOSE                        */
/* -------------------------------------------------------------------------- */

const handleEscUp = (evt) => {
  if (evt.which === ESCAPE) {
    const activePopup = document.querySelector(".modal_opened");

    closeModal(activePopup);
  }
};

/* -------------------------------------------------------------------------- */
/*                MODAL OPEN AND CLOSE WITH KEY CLICKS AS WELL                */
/* -------------------------------------------------------------------------- */

function clickOutCloseModal(evt) {
  if (evt.target.classList.contains("modal")) {
    const activePopup = document.querySelector(".modal_opened");

    closeModal(activePopup);
  }
}

const openModal = (openModal) => {
  document.addEventListener("mousedown", clickOutCloseModal);
  openModal.classList.add("modal_opened");

  document.addEventListener("keyup", handleEscUp);
};
const closeModal = (openModal) => {
  openModal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
  document.removeEventListener("mousedown", clickOutCloseModal);
};
