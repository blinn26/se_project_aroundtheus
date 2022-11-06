/* -------------------------------------------------------------------------- */
/*                               Cards For HTML                               */
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

const profileEditModal = document.querySelector("#edit-modal");
const profileEditButton = document.querySelector("#edit-button");

const cardAddModal = document.querySelector("#add-modal");
const cardAddButton = document.querySelector("#add-button");

const profileModalCloseButton = document.querySelector(".modal__close-button");
const profileEditForm = document.querySelector(".modal__form");
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

function openModal(modalNode) {
  modalNode.classList.add("modal__opened");

  profileLineInputValue.value = profileTitle.textContent;
  profileInputValue.value = profileDescription.textContent;
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileTitle.textContent = profileLineInputValue.value;
  profileDescription.textContent = profileInputValue.value;
  closeModal();
}
function closeModal() {
  document.querySelector(".modal__opened").classList.remove("modal__opened");
}

profileEditForm.addEventListener("submit", formSubmitHandler);

profileEditButton.addEventListener("click", () => openModal(profileEditModal));
profileModalCloseButton.addEventListener("click", closeModal);

cardAddButton.addEventListener("click", () => openModal(cardAddModal));
cardAddModal.addEventListener("click", closeModal );   
 
 