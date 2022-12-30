/* -------------------------------------------------------------------------- */
/*                            ESCAPE KEY EXIT PRESS                           */
/* -------------------------------------------------------------------------- */
export function handleEscUp(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.modal_opened')
    closeModal(activePopup)
    // closeModal(activePopup);
  }
}

/* -------------------------------------------------------------------------- */
/*                   CLICK OUTSIDE OF IMAGE OR MODAL ESCAPE                   */
/* -------------------------------------------------------------------------- */

export function clickOutCloseModal(evt) {
  if (evt.target.classList.contains('modal')) {
    closeModal(evt.target)
  }
}

export function openModal(openModal) {
  document.addEventListener('mousedown', clickOutCloseModal)
  openModal.classList.add('modal_opened')

  document.addEventListener('keyup', handleEscUp)
}
export function closeModal(openModal) {
  openModal.classList.remove('modal_opened')
  document.removeEventListener('keyup', handleEscUp)
  document.removeEventListener('mousedown', clickOutCloseModal)
}