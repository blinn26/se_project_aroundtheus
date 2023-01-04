class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer
    this._items = items
    this._container = document.querySelector(`.${containerSelector}`)
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item)
    })
    // use this._renderer to create the elements for rendering
  }
  addItem(element) {
    this._container.append(element)
  }
}

export default Section
