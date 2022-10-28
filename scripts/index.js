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

const profileEditButton = document.querySelector(".profile__edit-button");
console.log(profileEditButton)
const modal = document.querySelector(".modal");
console.log(modal)

const profileModalCloseButton = document.querySelector(".modal__close-button");
profileEditButton.addEventListener("click", () => {
modal.classList.add("modal__opened")
})
console.log(profileModalCloseButton)
profileModalCloseButton.addEventListener("click", () => {
  modal.classList.remove("modal__opened")
})

/* const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// find the form in the DOM
const profileFormElement = // Use the querySelector() method

// find the form fields in the DOM
const nameInput = // Use querySelector()
const jobInput = // Use querySelector()

// find the form fields in the DOM
const profileName = // Use querySelector()
const profileJob = // Use querySelector()

// the form submission handler. Note that its name 
// starts with a verb and concisely describes what it does
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
 
  // get the values of each field from the value property 
  // of the corresponding input element

  // insert new values into the textContent property of the 
  // corresponding profile elements
}

// connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleProfileFormSubmit); */