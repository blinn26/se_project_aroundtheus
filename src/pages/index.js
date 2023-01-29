/* -------------------------------------------------------------------------- */
/*             IMPORTING FORMVALIDATOR AND CARDS TO SCRIPTS FOR JS            */
/* -------------------------------------------------------------------------- */
import './index.css';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import { config, selectors } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../utils/Api';

/* -------------------------------------------------------------------------- */
/*                       MODAL / FORM / BUTTON / PROFILE                      */
/* -------------------------------------------------------------------------- */

const cardAddModal = document.querySelector('#add-modal');
const profileEditButton = document.querySelector(config.profileEditButtonSelector);
const cardModalOpenButton = document.querySelector(config.profileAddButtonSelector);
const profileModal = document.querySelector(config.profileModalSelector);
const profileEditForm = profileModal.querySelector(config.formSelector);
const profileNameInput = profileEditForm.querySelector(config.profilemodalInputLineSelector);
const profileDescriptionInput = profileEditForm.querySelector(config.profileModalDescriptionSelector);
const profileAvatarEditPencil = document.querySelector(config.profileAvatarPencilSelector);
const profileImageChange = document.querySelector(config.profileAvatarImageSelector);
/* -------------------------------------------------------------------------- */
/*            PROFILESELECTOR AND PROFILEDESCRIPTION MODAL SELECTOR           */
/* -------------------------------------------------------------------------- */

const userInfo = new UserInfo({
  profileNameSelector: config.profileNameSelector,
  profileDescriptionSelector: config.profileDescriptionSelector,
});

let userId;

/* -------------------------------------------------------------------------- */
/*                  ENABLE FORMVALIDATION FROM FORMVALIDATOR                  */
/* -------------------------------------------------------------------------- */

const editFormValidator = new FormValidator(config, profileEditForm);

const addCardValidator = new FormValidator(config, cardAddModal);

editFormValidator.enableValidation();

addCardValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                       BOTH POPUP MODALS AND PREVIEWS                       */
/* -------------------------------------------------------------------------- */

const addPopupWithImage = new PopupWithImage('#preview-modal');
addPopupWithImage.setEventListeners();
const addCardPopup = new PopupWithForm({
  popupSelector: '#add-modal',

  handleFormSubmit: (data) => {
    Api.addNewCard(data).then((cardData) => {
      const card = createCard(cardData);
      cardSection.addItem(card);

      addCardPopup.close();
    });
  },
});

addCardPopup.setEventListeners();

const userInfoPopup = new PopupWithForm({
  popupSelector: '#edit-modal',

  handleFormSubmit: (data) => {
    Api.editUserProfile(data).then((user) => {
      userInfo.setProfileInfo(user.name, user.about);
    });
  },
});
userInfoPopup.setEventListeners();

//ARE YOU SURE POPUP CLOSE

const confirmModalPopup = new PopupWithForm({
  popupSelector: '#confirm-modal',
  handleFormSubmit: (data) => {
    // why do we need data?
    confirmModalPopup.close();
  },
});
confirmModalPopup.setEventListeners();

//CHANGE PROFILE PICTURE

const changeProfilePic = new PopupWithForm({
  popupSelector: '#change-profile-pic',
  handleFormSubmit: (link) => {
    profileImageChange.src = link.url;
    console.log();
    changeProfilePic.close();
  },
});
changeProfilePic.setEventListeners();

profileAvatarEditPencil.addEventListener('click', () => {
  console.log(profileAvatarEditPencil);
  changeProfilePic.open();
});

profileEditButton.addEventListener('click', () => {
  const profileInfo = userInfo.getProfileInfo();
  profileNameInput.value = profileInfo.name;
  profileDescriptionInput.value = profileInfo.description;

  userInfoPopup.open();
});

/* -------------------------------------------------------------------------- */
/*                            CREATE CARD FUNCTION                            */
/* -------------------------------------------------------------------------- */

function createCard(item) {
  const card = new Card(
    {
      data: item,
      userId: userId,
      handCardClick: (data) => {
        addPopupWithImage.open(data);
      },
      handleLikeClick: (id, isLiked) => {
        return Api.updateCardLike(id, isLiked);
      },
      handleDeleteClick: (data) => {
        console.log(data);
        confirmModalPopup.open();
        // Api.removeLikeClick(data);
      },
    },
    selectors.cardTemplate
  );
  return card.getView();
}
let cardSection;

/* ------------------------ PROFILE FOR USERINFO API ------------------------ */

Promise.all([Api.getInitialCards(), Api.getUserInfo()]).then(([initialCards, user]) => {
  userId = user._id;
  userInfo.setProfileInfo(user.name, user.about, user.avatar);
  cardSection = new Section(
    {
      items: initialCards,
      renderer: (data) => {
        const card = createCard(data);

        cardSection.addItem(card);
      },
    },
    selectors.cardSection
  );
  cardSection.renderItems(); //This is what renders the cards
});
//Api.getInitialCards().then((initialCards) => {
//});

/* -------------------------------------------------------------------------- */
/*        CARD MODAL TITLE AND LINK AND PROFILE OPEN AND CLOSE BUTTONS        */
/* -------------------------------------------------------------------------- */

const handleAddCard = (evt) => {
  evt.preventDefault();
  const name = evt.target.title.value;
  const link = evt.target.link.value;

  closeModal(cardAddModal);
};

cardModalOpenButton.addEventListener('click', () => {
  addCardValidator.resetValidation();

  addCardPopup.open();
});
