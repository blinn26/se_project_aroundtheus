class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer
    this._container = document.querySelector(`.${containerSelector}`)
  }
  renderItems(items) {
    items.foreach((item) => {
      this._renderer(item)
    })
    // use this._renderer to create the elements for rendering
  }
  addItem(element) {
    this._container.append(element)
  }
}

export default Section
