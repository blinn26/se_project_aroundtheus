class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeIcon);

    this._element
      .querySelector(".card__image")
      .addEventListener("click", this._previewModalImage);

    this._element
      .querySelector(".card__trash-button")
      .addEventListener("click", this._cardTrashButton);
  }

  _handleLikeIcon() {
    this._element;
    evt.target.classList.toggle("card__like-button");
    // like icon active
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__description-list").textContent =
      this._name;
    this._setEventListeners();

    return this._element;
  }
}
export default Card;
