class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    // ...
  }

  // other methods for working with the API
}

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-12',
  headers: {
    authorization: '32639fe4-4217-403a-b398-f7a909cc834a',
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result.length)

    result.forEach((item) => {
      console.log(item.name)
    })
  })
