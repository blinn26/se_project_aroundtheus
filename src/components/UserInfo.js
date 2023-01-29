export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarImageSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(profileDescriptionSelector);

    this._profileAvatarElement = document.querySelector(profileAvatarImageSelector);
  }

  setProfileInfo(name, description) {
    this._profileNameElement.textContent = name;
    this._profileDescriptionElement.textContent = description;
  }

  setProfilePic(avatar) {
    this._profileAvatarElement.src = avatar;
    this._profileAvatarElement.alt = this._profileNameElement.textContent;
  }

  getProfileInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    };
  }
}
