/* -------------------------------------------------------------------------- */
/*                         ESCAPE EVENT OPEN AND CLOSE                        */
/* -------------------------------------------------------------------------- */
export function handleEscUp(evt) {
  if (evt.which === ESCAPE) {
    const activePopup = document.querySelector(".modal_opened");

    closeModal(activePopup);
  }
}

/* -------------------------------------------------------------------------- */
/*                MODAL OPEN AND CLOSE WITH KEY CLICKS AS WELL                */
/* -------------------------------------------------------------------------- */

export function clickOutCloseModal(evt) {
  if (evt.target.classList.contains("modal")) {
    const activePopup = document.querySelector(".modal_opened");

    closeModal(activePopup);
  }
}

export function openModal(openModal) {
  document.addEventListener("mousedown", clickOutCloseModal);
  openModal.classList.add("modal_opened");

  document.addEventListener("keyup", handleEscUp);
}
export function closeModal(openModal) {
  openModal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
  document.removeEventListener("mousedown", clickOutCloseModal);
}
