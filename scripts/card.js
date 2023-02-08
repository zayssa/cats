export class Card {
  constructor(
    dataCat,
    selectorTemplate,
    handleCatImage,
    handleCatTitle,
    handleCatLike
  ) {
    this._dataCat = dataCat;
    this._selectorTemplate = selectorTemplate;
    this._handleCatImage = handleCatImage;
    this._handleCatTitle = handleCatTitle;
    this._handleCatLike = handleCatLike;
  }

  _getTemplate() {
    // возвращает содержимое шаблона в виде DOM узла
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector('.card');
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true); // клонируем полученное содержимое из шаблона
    this.cardTitle = this.element.querySelector('.card__name');
    this.cardImage = this.element.querySelector('.card__image');
    this.cardLike = this.element.querySelector('.card__like');

    this.cardTitle.textContent = this._dataCat.name;
    this.cardImage.src = this._dataCat.image;

    if (this._dataCat.favorite) {
      this.cardLike.classList.add('card__like_active');
      // cardLike.remove() можно в элс чтоб удалить серые лайки
    }

    this.setEventListener();

    return this.element;
  }
  getData() {
    return this._dataCat;
  }

  getId() {
    return this._dataCat.id;
  }

  setData(newData) {
    this._dataCat = newData;
  }

  deleteView() {
    this.element.remove();
    this.element = null;
  }

  setEventListener() {
    this.cardImage.addEventListener('click', () =>
      this._handleCatImage(this._dataCat)
    );
    this.cardTitle.addEventListener('click', () => this._handleCatTitle(this));

    this.cardLike.addEventListener('click', () => this._handleCatLike(this));
  }
}
