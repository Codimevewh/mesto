export class Card {
    constructor(title, image, cardSelector, popupElement, handleCardClick) {
      this._title = title;
      this._image = image;
      this._cardSelector = cardSelector;
      this._popupElement = popupElement;
      this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.elements__card')
      .cloneNode(true);
      return cardElement;
    }
  
    _handleLikeElement() {
      this._likeElement.classList.toggle('elements__like_active');
    }
  
    _removeElement() {
      this._element.remove();
      this._element = null;
    }

    _setEventListeners() {
      this._likeElement.addEventListener('click', () => this._handleLikeElement());
      this._element.querySelector('.elements__trash').addEventListener('click', () => this._removeElement());
      this._element.querySelector('.elements__image').addEventListener('click', () => this._handleCardClick());
    }
  
    generateCard() {
      this._element = this._getTemplate();
      const elementImage = this._element.querySelector('.elements__image');
      this._likeElement = this._element.querySelector('.elements__like');
      this._element.querySelector('.elements__title').textContent = this._title;
      elementImage.src = this._image;
      elementImage.alt = this._title;
      this._setEventListeners();
  
      return this._element;
    }
  }
  