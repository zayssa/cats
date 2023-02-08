export class CatsInfo {
  constructor(selectorTemplate, handleDeleteCat) {
    this._selectorTemplate = selectorTemplate;
    this._handleDeleteCat = handleDeleteCat;
    this._data = {};
  }

  _getTemplate() {
    // возвращает содержимое шаблона в виде DOM узла
    return document.querySelector(this._selectorTemplate).content.children[0];
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true);

    this.buttonEdited = this.element.querySelector('.cat-info__edited');
    this.buttonDeleted = this.element.querySelector('.cat-info__deleted');
    this.catId = this.element.querySelector('.cat-info__id');
    this.catImage = this.element.querySelector('.cat-info__image');
    this.catName = this.element.querySelector('.cat-info__name');
    this.catRate = this.element.querySelector('.cat-info__rate');
    this.catFavourite = this.element.querySelector('.cat-info__favourite');

    this.setEventListener();
    return this.element;
  }

  setData(cardInstance) {
    this._cardInstance = cardInstance;
    this._data = this._cardInstance.getData();

    this.catId.innerText = this._data.id;
    this.catImage.src = this._data.image;
    this.catName.innerText = this._data.name;
    this.catRate.innerText = this._data.rate;
    if (this._data.favorite) {
      this.catFavourite.classList.add('cat-info__favourite_active');
    } else {
      this.catFavourite.classList.remove('cat-info__favourite_active');
    }
  }

  setEventListener() {
    this.buttonDeleted.addEventListener('click', () =>
      this._handleDeleteCat(this._cardInstance)
    );
  }
}
