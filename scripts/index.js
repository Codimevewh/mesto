import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

////////////////////// constants FormValidator /////////////////////

const formProfileEditValidator = new FormValidator(enableValidationSettings, formProfileEdit);
formProfileEditValidator.enableValidation();

const formElementsAddValidator = new FormValidator(enableValidationSettings, formElementsAdd);
formElementsAddValidator.enableValidation();

////////////////////// function add & remove popup /////////////////////

//add popup
export function addPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', pressPopupEsc)
}

//remove popup
function removePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', pressPopupEsc)
}

//press popup Esc up
function pressPopupEsc(evt) {
    if(evt.key === 'Escape') {
        removePopup(document.querySelector('.popup_opened'));
    }
  }

//Close popup click mouse up
const closePopupClickMouse = function(event) {
    const popupOpened = document.querySelector('.popup_opened');
    const buttonClose = popupOpened.querySelector('.popup__button-close');
    if (event.target !== event.currentTarget && event.target !== buttonClose) {
      return;
    }
    removePopup(popupOpened);
  }

//////////////////////////////////////////////////////////////////////////////////

function showEditProfileForm(formProfileEditValidator) {
    inputsValueProfile();
    formProfileEditValidator.clearFormInputError();
    addPopup(popupProfileEdit);
  }

function showAddItemForm(formElementsAddValidator) {
    formElementsAdd.reset();
    formElementsAddValidator.clearFormInputError();
    addPopup(popupElementsAdd);
  }
  
////////////////////// function profile /////////////////////

//input value profile
function inputsValueProfile() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

//textcontents profile
function textContentsProfile() {
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

//save data profile
function saveSubmitProfileEdit (evt) {
    evt.preventDefault();
    textContentsProfile();
    removePopup(popupProfileEdit);
}

//////////////////////// function elements /////////////////////////

const outputPlaceCard = card => {
    const item = new Card(card, '.elements-template');
    const itemElement = item.generateCard();
    return itemElement;
  };
  
  //render elements
  initialCards.forEach((card) => {
    const elementsСontainer = document.querySelector('.elements__cards');
    elementsСontainer.append(outputPlaceCard(card));
  });

//appoint contents elements
function appointСontentElements() {
    const card = {
        name: inputNameElements.value,
        link: inputLinksElements.value
    };
    elementsСontainer.prepend(outputPlaceCard(card));
}

//save data elements
function saveSubmitElementsAdd(evt) {
    evt.preventDefault();
    appointСontentElements();
    removePopup(popupElementsAdd);
}

/////////////////////////// Open Popup /////////////////////////////

//open popup profile
profileButtonEdit.addEventListener('click', () => {showEditProfileForm(formProfileEditValidator);});

//open popup elements 
profileButtonAdd.addEventListener('click', () => {showAddItemForm(formElementsAddValidator);});

/////////////////////////// Close Popup ////////////////////////////

//close button popup profile
popupProfileEditClose.addEventListener('click', () => removePopup(popupProfileEdit));

//close click mouse popup profile
popupProfileEdit.addEventListener('mouseup', closePopupClickMouse);

//close button popup elements
popupElementsAddClose.addEventListener('click', () => removePopup(popupElementsAdd));

//close click mouse popup elements
popupElementsAdd.addEventListener('mouseup', closePopupClickMouse);

/////////////////////////// Close Image ////////////////////////////

//close click mouse image
popupElementsImage.addEventListener('mouseup', closePopupClickMouse);

/////////////////////////// Save data button ///////////////////////

//save data button profile
formProfileEdit.addEventListener('submit', saveSubmitProfileEdit);

//save data button elements
formElementsAdd.addEventListener('submit', saveSubmitElementsAdd);