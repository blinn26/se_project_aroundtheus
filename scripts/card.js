class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._name = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    document.querySelector(this._cardSelector);
  }

  getView() {}
}

export default Card;
