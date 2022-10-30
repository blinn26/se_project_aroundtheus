// Cards for HTML 

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


 // const commands, functions, strings and eventListeners!

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector(".modal");
const profileModalCloseButton = document.querySelector(".modal__close-button");
const profileEditForm = document.querySelector(".modal__form");
const profileTitle = document.querySelector(".profile__title ");
const profileDescription = document.querySelector(".profile__description");
const profileLineInputValue = profileEditForm.querySelector(".modal__input-line");
const profileInputValue = profileEditForm.querySelector(".modal__input-description");
const cardListEl = document.querySelector(".cards__list");



initialCards.forEach(function (cardData) {
  
  // clone template
  const cardEl = cardTemplate.cloneNode(true);
  // find .card__image
  const imageEl = cardEl.querySelector(".card__image");
  // find card__title
  const cardTitle = cardEl.querySelector(".card__description-list");
  // replace image src
  imageEl.src = cardData.link;
  // replace image alt
  imageEl.alt = cardData.name;
  // replace title
  cardTitle.textContent = cardData.name;
  // append to the list
  cardListEl.appendChild(cardEl);
});

function openModal() {
  profileLineInputValue.value = profileTitle.textContent;
  profileInputValue.value = profileDescription.textContent;

  profileModal.classList.add("modal__opened");
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileTitle.textContent = profileLineInputValue.value;
  profileDescription.textContent = profileInputValue.value;
  closeModal();
}
function closeModal() {
  profileModal.classList.remove("modal__opened");

}
  profileEditForm.addEventListener("submit", formSubmitHandler);
  profileEditButton.addEventListener("click", openModal);
  profileModalCloseButton.addEventListener("click", closeModal);
