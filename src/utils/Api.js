class Api {
  /* ---------------------------- CONSTRUCTOR BUILD --------------------------- */

  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  /* ---------------------------------- CARDS --------------------------------- */

  async getInitialCards() {
    const res = await fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
    if (res.ok) {
      return res.json()
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`)
    // ...
  }

  // other methods for working with the API
}

export default new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-12',
  headers: {
    authorization: '32639fe4-4217-403a-b398-f7a909cc834a',
    'Content-Type': 'application/json',
  },
})

function getTasks() {
  return fetch(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Error')
  })
}

function deleteTask(id) {
  return fetch(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Error')
  })
}
//{name: "todo here"}
