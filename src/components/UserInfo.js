export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector) {
    this._profileNameElement = document.querySelector(profileNameSelector)
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    )
  }

  setProfileInfo(name, description) {
    this._profileNameElement.textContent = name
    this._profileDescriptionElement.textContent = description
  }

  getProfileInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    }
  }
}
