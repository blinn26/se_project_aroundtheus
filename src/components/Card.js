/* -------------------------------------------------------------------------- */
/*                            CONSTRUCTOR FOR CARDS                           */
/* -------------------------------------------------------------------------- */

class Card {
  constructor(
    { data, handCardClick, handleLikeClick, handleDeleteClick },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handledDeleteClick = handleDeleteClick;
  }

  /* -------------------------------------------------------------------------- */
  /*                             SET EVENTLISTENERS                             */
  /* -------------------------------------------------------------------------- */

  _setEventListeners() {
    this._element
      .querySelector('.card__like-button')
      .addEventListener('click', this._handleLikeIcon);

    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this._handleCardClick({
          name: this._name,
          link: this._link,
        });
      });

    this._element
      .querySelector('.card__trash-button')
      .addEventListener('click', this._handleDeleteCard);
  }

  /* -------------------------------------------------------------------------- */
  /*                           HANDLE AND GET TEMPLATE                          */
  /* -------------------------------------------------------------------------- */

  _handleLikeIcon = () => {
    this._element
      .querySelector('.card__like-button')
      .classList.toggle('card__like-button_is-active');
    // like icon active
  };

  _handleDeleteCard = () => {
    this._element.remove();
    // delete card
  };
  _getTemplate() {
    const cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardEl;
  }

  /* -------------------------------------------------------------------------- */
  /*                           RETURN CARDS AND EXPORT                          */
  /* -------------------------------------------------------------------------- */

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__description-list').textContent =
      this._name;
    this._element.querySelector('.card__image').alt = this._name;
    this._setEventListeners();

    return this._element;
  }
}
export default Card;
