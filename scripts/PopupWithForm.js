import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
 }

 _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__field');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
 }

 setEventListeners() {
  this._popup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._getInputValues());
    this.close();
  });

  super.setEventListeners();
 }

 close() {
  this._popup.querySelector('.popup__form').reset();
  super.close();
 }

}