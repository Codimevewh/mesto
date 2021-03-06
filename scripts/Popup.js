export class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
   open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
   }
  
   close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
   }
  
   _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }
  
   setEventListeners() {
    this._popup.addEventListener('mouseup', (event) => {
      this._buttonClose = this._popup.querySelector('.popup__button-close');
      if (event.target !== event.currentTarget && event.target !== this._buttonClose) {
        return;
      }
      else
        this.close();
      }
      );
    }
}