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
  
    _handleLikeElement() {
       this._likeElement.classList.toggle('elements__like_active');
    }
  
    //remove element in CARD
    _removeElement() {
       this._element.remove();
       this._element = null;
    }

    //open image in CARD
    _addElementImage() {
      popupContainerElementsImage.src = this._image;
      popupContainerElementsImage.alt = this._title;;
      popupContainerElementsImageTitle.textContent = this._title;
      addPopup(popupElementsImage);
    }
  
    //combine event Listeners in CARD
    _setEventListeners() {
      this._likeElement.addEventListener('click', () => this._handleLikeElement());
      this._element.querySelector('.elements__trash').addEventListener('click', () => this._removeElement());
      this._element.querySelector('.elements__image').addEventListener('click', () => this._addElementImage());
    }
  
    //generate card in CARD
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