import {addPopup} from './index.js';

//export class CARD
export class Card {
    constructor(cardData, cardSelector) {
      this._title = cardData.name;
      this._image = cardData.link;
      this._cardSelector = cardSelector;
    }
  
    //clone template cards in CARD
    _getTemplate() {
      return document
        .querySelector(this._cardSelector)
        .content.querySelector('.elements__card')
        .cloneNode(true);
    }
  
    _handleLikeElements(evt) {
       this._likeElements.classList.toggle('elements__like_active');
    }
  
    //remove elements in CARD
    _removeElements(evt) {
       this._element.remove();
    }

    //open image in CARD
    _addElementsImage() {
      popupContainerElementsImage.src = this._image;
      popupContainerElementsImage.alt = this._title;;
      popupContainerElementsImageTitle.textContent = this._title;
      addPopup(popupElementsImage);
    }
  
    //combine event Listeners in CARD
    _setEventListeners() {
      this._likeElements.addEventListener('click', (evt) => {
        this._handleLikeElements(evt);
      });
      this._element.querySelector('.elements__trash').addEventListener('click', (evt) => {
        this._removeElements(evt);
      });
      this._element.querySelector('.elements__image').addEventListener('click', () => {
        this._addElementsImage();
      });
    }
  
    //generate card in CARD
    generateCard() {
      this._element = this._getTemplate();
      this._likeElements = this._element.querySelector('.elements__like');
      this._element.querySelector('.elements__title').textContent = this._title;
      this._element.querySelector('.elements__image').src = this._image;
      this._element.querySelector('.elements__image').alt = this._title;
      this._setEventListeners();
  
      return this._element;
    }
  }