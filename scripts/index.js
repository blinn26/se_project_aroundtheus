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
/*                       Const Commands Query Selectors                       */
/* -------------------------------------------------------------------------- */

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const profileEditButton = document.querySelector(".profile__edit-button");

// two unique modals
const profileEditModal = document.querySelector("#edit-modal");
const cardAddModal = document.querySelector("#add-modal");

// therefore we need two unieq forms
// e.g.: cardAddModal.querySelector('.modal__form'); ->> this is a unique form for the card add modal



const cardModalOpenButton = document.querySelector(".profile__add-button");
const profileModalCloseButton = profileEditModal.querySelector(".modal__close-button");
const addModalCloseButton = cardAddModal.querySelector(".modal__close-button");
const profileEditForm = document.querySelector(".modal__form");
const modalEditForm = document.querySelector(".modal");
const modalTitleForm = modalEditForm.querySelector("#modal__form-title");
const modalLinkForm = modalEditForm.querySelector("#modal__form-link");
const profileTitle = document.querySelector(".profile__title ");
const profileDescription = document.querySelector(".profile__description");
const profileLineInputValue = profileEditForm.querySelector(".modal__input-line");
const profileInputValue = profileEditForm.querySelector(".modal__input-description");
const cardListEl = document.querySelector(".cards__list");

/* -------------------------------------------------------------------------- */
/*                            Card Commands for JS                            */
/* -------------------------------------------------------------------------- */
function createCard({ name, link }) {
  // clone template
  const cardEl = cardTemplate.cloneNode(true);
  // find .card__image
  const imageEl = cardEl.querySelector(".card__image");
  // find card__title
  const cardTitle = cardEl.querySelector(".card__description-list");
  // replace image src
  imageEl.src = link;
  // replace image a
  imageEl.alt = name;
  // replace title
  cardTitle.textContent = name;
  return cardEl;
}
function renderCard(cardData) {
  const cardEl = createCard(cardData)
  // append to the list
  cardListEl.appendChild(cardEl);
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

const formAddCardHandler = (evt) => {
  evt.preventDefault();
console.log("I am clicking submit button")

}
/* -------------------------------------------------------------------------- */
/*                               Modal Settings                               */
/* -------------------------------------------------------------------------- */
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

