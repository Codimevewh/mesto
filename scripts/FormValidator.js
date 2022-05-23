export class FormValidator {
    constructor(settings, formElem) {
     this._formSelector = settings.formSelector;
     this._inputSelector = settings.inputSelector;
     this._submitButtonSelector = settings.submitButtonSelector;
     this._inactiveButtonClass = settings.inactiveButtonClass;
     this._inputErrorClass = settings.inputErrorClass;
     this._errorClass = settings.errorClass;
     this._formElem = formElem;
   }
 
  
   _hasInvalidInput() {
   return Array.from(this._inputList).some((inputElement) => {
     return !inputElement.validity.valid;
   })
   }
 
    _toggleButtonState() {
     if (this._hasInvalidInput()) {
       this._buttonElement.classList.add(this._inactiveButtonClass);
       this._buttonElement.setAttribute('disabled', true);
     } else {
       this._buttonElement.classList.remove(this._inactiveButtonClass);
       this._buttonElement.removeAttribute('disabled');
     }
   }
 
   _showInputError(inputElement) {
     const errorElement = this._formElem.querySelector(`.${inputElement.id}-field-error`);
     inputElement.classList.add(this._inputErrorClass);
     errorElement.textContent = inputElement.validationMessage;
     errorElement.classList.add(this._errorClass);
   }
 
   _hideInputError(inputElement) {
     const errorElement = this._formElem.querySelector(`.${inputElement.id}-field-error`);
     inputElement.classList.remove(this._inputErrorClass);
     errorElement.classList.remove(this._errorClass);
     errorElement.textContent = '';
   }
 
   _checkInputValidity(inputElement) {
     if (!inputElement.validity.valid) {
       this._showInputError(inputElement);
     }
     else {
       this._hideInputError(inputElement);
     }
   }
 
   _setEventListeners() {
     this._toggleButtonState();
     this._inputList.forEach((inputElement) => {inputElement.addEventListener('input', () => {
         this._checkInputValidity(inputElement);
         this._toggleButtonState();
       });
     });
   }
 
   clearFormInputError() {
     this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
     this._toggleButtonState();
   }
 
   enableValidation() {
     this._inputList = Array.from(this._formElem.querySelectorAll(this._inputSelector));
     this._buttonElement = this._formElem.querySelector(this._submitButtonSelector);
     this._setEventListeners ();
   }
}