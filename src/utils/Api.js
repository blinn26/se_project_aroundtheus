class Api {
  /* ---------------------------- CONSTRUCTOR BUILD --------------------------- */

  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
  }

  /* ------------------------- INTIAL CARDS FROM HOST ------------------------- */

  async getInitialCards() {
    const res = await fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    });
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
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
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
  }

  /* ------------------------- DELETE A CARD FROM API ------------------------- */

  async deleteCard(id) {
    const res = await fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    });
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
  }

  /* ---------------------------- PROFILE USER INFO --------------------------- */

  async getUserInfo() {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
    });
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
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
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
  }

  /* --------------------- CARD LIKE BUTTON OR HEART LIKE --------------------- */

  async updateCardLike(id, isLiked) {
    const res = await fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this.headers,
    });
    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
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

    return res.ok ? res.json() : Promise.reject(`Err: ${res.status}`);
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
