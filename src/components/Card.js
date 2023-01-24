/* -------------------------------------------------------------------------- */
/*                            CONSTRUCTOR FOR CARDS                           */
/* -------------------------------------------------------------------------- */

class Card {
  constructor(
    { data, userId, handCardClick, handleLikeClick, handleDeleteClick },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handledDeleteClick = handleDeleteClick;
    this._id = data._id;
    this._userId = userId;
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

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _handleLikeIcon = () => {
    this._handleLikeClick(this._id, this.isLiked()).then((data) => {
      console.log(data);
      this._likes = data.likes;
      this._updateLikesView();
    });
  };
  /* 
  _handleLikeIcon() {
    if (this._something()) {
      this._handleCardClick.classList.add('card__like-button_is-active');
    } else {
      this._handleCardClick.classList.remove('card__like-button_is-active');
    }
    this._something.textContent = _something
}

return something  */

  /* trying to figure out this add and remove heart thing */

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

  _updateLikesView() {
    //decide if heart should be
    //set the like count
    console.log(this._likes);
    this._element.querySelector('.card__like-count').textContent =
      this._likes.length;

    if (this.isLiked()) {
      this._element
        .querySelector('.card__like-button')
        .classList.add('card__like-button_is-active');
    } else {
      this._element
        .querySelector('.card__like-button')
        .classList.remove('card__like-button_is-active');
    }
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
    this._updateLikesView();

    return this._element;
  }
}
export default Card;
