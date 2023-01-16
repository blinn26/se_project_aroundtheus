class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  getTodos() {}

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

// fetch('https://around.nomoreparties.co/v1/group-12/cards', {
//   headers: {
//     authorization: '32639fe4-4217-403a-b398-f7a909cc834a',
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result.length)

//     result.forEach((item) => {
//       console.log(item.name)
//     })
//   })
