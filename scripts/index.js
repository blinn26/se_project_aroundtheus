/* -------------------------------------------------------------------------- */
/*                               ARRAY OF HTML                                */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];

/* -------------------------------------------------------------------------- */
/*                               CARDS COMMANDS                               */
/* -------------------------------------------------------------------------- */

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const cardImageViewer = cardTemplate.querySelector(".card__image-viewer ");
/* -------------------------------------------------------------------------- */
/*                            ID LABLED WITH MODAL                            */
/* -------------------------------------------------------------------------- */

const profileEditModal = document.querySelector("#edit-modal");
const cardAddModal = document.querySelector("#add-modal");

/* -------------------------------------------------------------------------- */
/*                          PROFILE AND MODAL BUTTONS                         */
/* -------------------------------------------------------------------------- */

const profileEditButton = document.querySelector(".profile__edit-button");
const cardModalOpenButton = document.querySelector(".profile__add-button");
const profileModalCloseButton = profileEditModal.querySelector(".modal__close-button");
const addModalCloseButton = cardAddModal.querySelector(".modal__close-button");


/* -------------------------------------------------------------------------- */
/*                           MODAL AND PROFILE FORMS                          */
/* -------------------------------------------------------------------------- */
const profileEditForm = document.querySelector(".modal__form");
const modalEditForm = document.querySelector(".modal");
const modalTitleForm = modalEditForm.querySelector("#modal__form-title");
const modalLinkForm = modalEditForm.querySelector("#modal__form-link");

/* -------------------------------------------------------------------------- */
/*                         TEXT CONTENT NAME AND TITLE                        */
/* -------------------------------------------------------------------------- */

const profileTitle = document.querySelector(".profile__title ");
const profileDescription = document.querySelector(".profile__description");
const profileLineInputValue = profileEditForm.querySelector(".modal__input-line");
const profileInputValue = profileEditForm.querySelector(".modal__input-description");

/* -------------------------------------------------------------------------- */
/*                            Card Commands for JS                            */
/* -------------------------------------------------------------------------- */

function renderCard(cardData) {
  // clone template
  const cardEl = cardTemplate.cloneNode(true);
  // find .card__image
  const imageEl = cardEl.querySelector(".card__image");
  // find card__title
  const cardTitle = cardEl.querySelector(".card__description-list");

  // replace image src
  imageEl.src = link;
  // replace image a
  imageEl.alt = title;
  // replace title
  cardTitle.textContent = title;
  return cardEl;
}
const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
  // Students know about `evt.target`
};

function createCard({ name, link }) {
  // clone template
  const cardEl = cardTemplate.cloneNode(true);
  // find .card__image 
  const imageEl = cardEl.querySelector(".card__image");
  // find card__title
  const cardLikeButton = cardEl.querySelector(".card__like-button");
  // add like button darken card element 
  const cardTitle = cardEl.querySelector(".card__description-list");
  // replace image src
  imageEl.src = link;
  // replace image a
  imageEl.alt = name;
  // replace title
  cardLikeButton.addEventListener("click", handleLikeIcon);
  //  listener for button heart icon
  cardTitle.textContent = name;

  const cardTrashButton = cardEl.querySelector(".card__trash-button");
  cardTrashButton.addEventListener("click", () => {
    cardEl.remove();
  });
  imageEl.addEventListener("click", () => {
    cardImageViewer.src = data.link;
    cardImageViewer.alt = data.name;
    openModal(cardListEl);

  });

  return cardEl;
}
function renderCard(cardData) {
  const cardEl = createCard(cardData)
  cardListEl.prepend(cardEl);
  // append to the list
}
// loop -> createCard -> renderCard
//user event handler -> createCard -> renderCard

initialCards.forEach(renderCard);

/* -------------------------------------------------------------------------- */
/*             Edit Profile Settings/Open/Close/Title/Description             */
/* -------------------------------------------------------------------------- */

function openModal(modal) {
  modal.classList.add("modal__opened");

}
function formSubmitHandler(event) {
  event.preventDefault();

  profileTitle.textContent = profileLineInputValue.value;
  profileDescription.textContent = profileInputValue.value;

  closeModal(profileEditModal);
}

profileEditForm.addEventListener("submit", formSubmitHandler);
profileEditButton.addEventListener("click", () => {
  profileLineInputValue.value = profileTitle.textContent;
  profileInputValue.value = profileDescription.textContent;
  openModal(profileEditModal);
});

function closeModal(modal) {
  modal.classList.remove('modal__opened');
}

/* -------------------------------------------------------------------------- */
/*                                 DELETE CARD                                */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                               ADD CUSTOM CARD                              */
/* -------------------------------------------------------------------------- */

const formAddCardHandler = (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const link = evt.target.link.value;
  renderCard(
    {
      name: name,
      link: link,
    }
  );
  closeModal(cardAddModal);
}

cardModalOpenButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

/* -------------------------------------------------------------------------- */
/*                                Close Buttons                               */
/* -------------------------------------------------------------------------- */
profileModalCloseButton.addEventListener("click", () => closeModal(profileEditModal));
modalEditForm.addEventListener("submit", formSubmitHandler); // edit user -> formSubmitHandler
addModalCloseButton.addEventListener("click", () => closeModal(cardAddModal));
cardAddModal.addEventListener("submit", formAddCardHandler); // ??? add card specific form handler

