class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._name = data.link;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    cardTrashButton.addEventListener("click", () => {
      Card.remove();
      previewCloseButton.addEventListener("click"),
        () => closeModal(previewModal);
    });
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();
  }
}

export default Card;
