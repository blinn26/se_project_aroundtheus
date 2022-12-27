export default class Section {
  constructor({ items, renderer, selector }) {
    console.log(items)
    console.log(renderer)
    this._items = items
    this._renderer = renderer
    this._element = document.querySelector(selector)
  }

  renderItems() {
    this._items.forEach((element) => {
      console.log(element)
      this._renderer(element)
    })
    // use this._renderer to create the elements for rendering
  }

  addItems(item) {
    // take the item and render it into this._element
  }
}
