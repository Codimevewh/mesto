import {Popup} from './Popup.js';

 export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._pictureElem = this._popup.querySelector('.popup-elements-image__image');
    this._captionElem = this._popup.querySelector('.popup-elements-image__title');
 }

 setCardData(cardText, cardImage) {
  this._cardText = cardText;
  this._cardImage = cardImage;
 }

 open() {
    this._pictureElem.src = this._cardImage;
    this._pictureElem.alt = this._cardText;
    this._captionElem.textContent = this._cardText;
    super.open()
 }
}