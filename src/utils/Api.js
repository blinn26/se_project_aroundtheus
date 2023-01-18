class Api {
  /* ---------------------------- CONSTRUCTOR BUILD --------------------------- */

  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  /* ---------------------------------- CARDS --------------------------------- */

  async getInitialCards() {
    const res = await fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
    // ...written Promise here for Server response
  }

  /* ------------------------------ PROFILE MODAL ----------------------------- */

  // profile user in modal section user information name and description
  async editUserProfile(data) {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.title,
        about: data.description,
      }),
    });
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
    // ...
  }
}
/* ---------------- CUSTOM URL AND GROUP CODE FOR PROJECT API --------------- */

export default new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-12',
  headers: {
    authorization: '32639fe4-4217-403a-b398-f7a909cc834a',
    'Content-Type': 'application/json',
  },
});
