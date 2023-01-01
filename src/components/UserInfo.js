export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector) {
    this._profileNameElement = document.querySelector(profileNameSelector)
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    )
  }
}
setProfileInfo(Name, description)
{
  this._profileNameElement.textContent = Name
  this._profileDescriptionElement.textContent = description
}

getProfileInfo()
{
  return {
    profileName: this._profileNameElement.textContent,
    profileDescription: this._profileDescriptionElement.textContent,
  }
}
