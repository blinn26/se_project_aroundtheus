class Api {
  /* ---------------------------- CONSTRUCTOR BUILD --------------------------- */

  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  /* ------------------------- INTIAL CARDS FROM HOST ------------------------- */

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

  /* ----------------------------- NEW CARD ADDING ---------------------------- */

  async addNewCard(data) {
    const res = await fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  /* ------------------------- DELETE A CARD FROM API ------------------------- */

  async deleteCard(id) {
    const res = await fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  /* ---------------------------- PROFILE USER INFO --------------------------- */

  async getUserInfo() {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  /* ------------------------------ PROFILE MODAL ----------------------------- */

  // profile user in modal section user information name and description
  async editUserProfile(data) {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
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

  /* --------------------- CARD LIKE BUTTON OR HEART LIKE --------------------- */

  async updateCardLike(id, isLiked) {
    const res = await fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this.headers,
    });
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  /* ------------------ PROFILE IMAGE INSIDE CIRCLE IN HEADER ----------------- */

  async updateProfileImage(data) {
    const res = await fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
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
