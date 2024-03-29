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
const profileAvatarEl = document.querySelector(config.profileAvatarSelector);
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
  profileAvatarImageSelector: config.profileAvatarImageSelector,
});

/* ------------------------- USERID SETUP AND CALLED ------------------------ */

let userId;

/* -------------------------------------------------------------------------- */
/*                  ENABLE FORMVALIDATION FROM FORMVALIDATOR                  */
/* -------------------------------------------------------------------------- */

const editFormValidator = new FormValidator(config, profileEditForm);

const addCardValidator = new FormValidator(config, cardAddModal);

const profileAvatarFormValidator = new FormValidator(config, profileAvatarEl);

editFormValidator.enableValidation();

addCardValidator.enableValidation();

profileAvatarFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                       BOTH POPUP MODALS AND PREVIEWS                       */
/* -------------------------------------------------------------------------- */

const addPopupWithImage = new PopupWithImage('#preview-modal');
addPopupWithImage.setEventListeners();
const addCardPopup = new PopupWithForm({
  popupSelector: '#add-modal',

  handleFormSubmit: (data) => {
    addCardPopup.setLoading(true);
    Api.addNewCard(data)
      .then((cardData) => {
        const card = createCard(cardData);
        cardSection.addItem(card);

        addCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addCardPopup.setLoading(false, 'Create');
      });
  },
});

addCardPopup.setEventListeners();

const userInfoPopup = new PopupWithForm({
  popupSelector: '#edit-modal',

  handleFormSubmit: (data) => {
    userInfoPopup.setLoading(true);
    Api.editUserProfile(data)
      .then((user) => {
        userInfo.setProfileInfo(user.name, user.about);

        userInfoPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        userInfoPopup.setLoading(false, 'Save');
      });
  },
});
userInfoPopup.setEventListeners();

/* ------------------------ ARE YOU SURE POPUP CLOSE ------------------------ */

const confirmModalPopup = new PopupWithForm({
  popupSelector: '#confirm-modal',
});
confirmModalPopup.setEventListeners();

/* ------------------------- CHANGE PROFILE PICTURE ------------------------- */

const changeProfilePic = new PopupWithForm({
  popupSelector: '#change-profile-pic',
  handleFormSubmit: (link) => {
    changeProfilePic.setLoading(true);
    Api.updateProfileImage({ avatar: link.url })
      .then((data) => {
        userInfo.setProfilePic(data.avatar);

        changeProfilePic.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        changeProfilePic.setLoading(false, 'Save');
      });
  },
});
changeProfilePic.setEventListeners();

/* -------------------------- PROFILE AVATAR PENCIL ------------------------- */

profileAvatarEditPencil.addEventListener('click', () => {
  profileAvatarFormValidator.resetValidation();

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
      handleDeleteClick: (cardID) => {
        confirmModalPopup.open();
        confirmModalPopup.setSubmitAction(() => {
          Api.deleteCard(cardID)
            .then(() => {
              card.removeCard();

              confirmModalPopup.close();
            })
            .catch(() => (err) => console.log(err));
        });
      },
    },
    selectors.cardTemplate
  );
  return card.getView();
}
let cardSection;

/* ------------------------ PROFILE FOR USERINFO API ------------------------ */

Promise.all([Api.getInitialCards(), Api.getUserInfo()])
  .then(([initialCards, user]) => {
    userId = user._id;
    userInfo.setProfileInfo(user.name, user.about);
    userInfo.setProfilePic(user.avatar);
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
    cardSection.renderItems();
  })
  .catch(() => (err) => console.log(err));

cardModalOpenButton.addEventListener('click', () => {
  addCardValidator.resetValidation();

  addCardPopup.open();
});
