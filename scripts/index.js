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
const profileModal = document.querySelector(".modal");
const profileEditForm = profileModal.querySelector(".modal__form");
const modalTitleForm = profileModal.querySelector("#modal__form-title");
const modalLinkForm = profileModal.querySelector("#modal__form-link");
const previewModal = document.getElementById('preview-modal');
const previewTextModal = document.querySelector(".modal__text ");

/* -------------------------------------------------------------------------- */
/*                         TEXT CONTENT NAME AND TITLE                        */
/* -------------------------------------------------------------------------- */

const profileTitle = document.querySelector(".profile__title ");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = profileEditForm.querySelector(".modal__input-line");
const profileDescriptionInput = profileEditForm.querySelector(".modal__input-description");

/* -------------------------------------------------------------------------- */
/*                            Card Commands for JS                            */
/* -------------------------------------------------------------------------- */

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
  // Trash button add commands
  cardTrashButton.addEventListener("click", () => {
    cardEl.remove();
  });

  /* -------------------------------------------------------------------------- */
  /*                             MODAL PREVIEW IMAGE                            */
  /* -------------------------------------------------------------------------- */

  imageEl.addEventListener("click", () => {

    const previewModalImage = previewModal.querySelector('#modal-image');


    previewModalImage.src = link;
    previewModalImage.alt = name;

    previewTextModal.textContent = name;
    openModal(document.getElementById('preview-modal'));
  });

  return cardEl;
}

const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
  // like icon active
};

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
  modal.classList.add("modal_opened");

}
function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeModal(profileEditModal);
}

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

function closeModal(modal) {
  modal.classList.remove('modal_opened');
}

/* -------------------------------------------------------------------------- */
/*                               ADD CUSTOM CARD                              */
/* -------------------------------------------------------------------------- */

const handleAddCard = (evt) => {
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

  evt.target.reset();
}

cardModalOpenButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

/* -------------------------------------------------------------------------- */
/*                                Close Buttons                               */
/* -------------------------------------------------------------------------- */
profileModalCloseButton.addEventListener("click", () => closeModal(profileEditModal));
profileModal.addEventListener("submit", handleProfileFormSubmit); // edit user -> handleProfileFormSubmit
addModalCloseButton.addEventListener("click", () => closeModal(cardAddModal));
cardAddModal.addEventListener("submit", handleAddCard); // ??? add card specific form handler
const previewCloseButton = previewModal.querySelector("#preview-modal-close");
previewCloseButton.addEventListener("click", () => closeModal(previewModal));

