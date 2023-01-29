export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(profileDescriptionSelector);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
  }

  setProfileInfo(name, description, avatar) {
    this._profileNameElement.textContent = name;
    this._profileDescriptionElement.textContent = description;
    this._profileAvatarElement.textContent = avatar;
  }

  getProfileInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
      avatar: this._profileAvatarElement.textContent,
    };
  }
}
