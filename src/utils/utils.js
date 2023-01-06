/* -------------------------------------------------------------------------- */
/*                            OPEN AND CLOSE MODAL                            */
/* -------------------------------------------------------------------------- */

export function clickOutCloseModal(evt) {
  if (evt.target.classList.contains('modal')) {
    closeModal(evt.target)
  }
}
export function openModal(openModal) {
  document.addEventListener('mousedown', clickOutCloseModal)
  openModal.classList.add('modal_opened')

  document.addEventListener('keyup', _handleEscUp)
}
export function _handleEscUp(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.modal_opened')
    closeModal(activePopup)
  }
}
export function closeModal(openModal) {
  openModal.classList.remove('modal_opened')
  document.removeEventListener('keyup', _handleEscUp)
  document.removeEventListener('mousedown', clickOutCloseModal)
}
