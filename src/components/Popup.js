class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  /* -------------------------------------------------------------------------- */
  /*              EVENT LISTENERS FOR OPEN AND CLOSE CLICK AND ESC              */
  /* -------------------------------------------------------------------------- */

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains('modal') ||
        evt.target.classList.contains('modal__close-button')
      ) {
        this.close();
      }
    });
  }

  open() {
    this._popupElement.classList.add('modal_opened');
    document.addEventListener('keyup', this._handleEscUp);
  }

  close() {
    this._popupElement.classList.remove('modal_opened');
    document.removeEventListener('keyup', this._handleEscUp);
  }
}

export default Popup;
