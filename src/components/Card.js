/* -------------------------------------------------------------------------- */
/*                            CONSTRUCTOR FOR CARDS                           */
/* -------------------------------------------------------------------------- */

class Card {
  constructor({ data, userId, handCardClick, handleLikeClick, handleDeleteClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._id = data._id;
    this._userId = userId;
  }

  /* -------------------------------------------------------------------------- */
  /*                             SET EVENTLISTENERS                             */
  /* -------------------------------------------------------------------------- */

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', this._handleLikeIcon);

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick({
        name: this._name,
        link: this._link,
      });
    });

    this._element
      .querySelector('.card__trash-button')
      .addEventListener('click', () => this._handleDeleteClick(this._id));
  }

  /* -------------------------------------------------------------------------- */
  /*                     CARDS HANDLE LIKED ICONS GET REMOVE                    */
  /* -------------------------------------------------------------------------- */

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _handleLikeIcon = () => {
    this._handleLikeClick(this._id, this.isLiked())
      .then((data) => {
        this._likes = data.likes;
        this._updateLikesView();
      })
      .catch(() => (err) => console.log(err));
  };

  removeCard = () => {
    this._element.remove();
  };
  _getTemplate() {
    const cardEl = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardEl;
  }

  _updateLikesView() {
    this._element.querySelector('.card__like-count').textContent = this._likes.length;

    if (this.isLiked()) {
      this._element.querySelector('.card__like-button').classList.add('card__like-button_is-active');
    } else {
      this._element.querySelector('.card__like-button').classList.remove('card__like-button_is-active');
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                           RETURN CARDS AND EXPORT                          */
  /* -------------------------------------------------------------------------- */

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__description-list').textContent = this._name;
    this._element.querySelector('.card__image').alt = this._name;
    /* this._handleDeleteCard = this._element.querySelector('.card__trash-button'); */
    this._setEventListeners();
    this._updateLikesView();

    return this._element;
  }
}
export default Card;
