import '../pages/index.css';

import {initialCards} from '../scripts/constants.js';
import {enableValidationSettings} from '../scripts/constants.js';
import {userInfoSettings} from '../scripts/constants.js';
import {formProfileEdit} from '../scripts/constants.js';
import {formElementsAdd} from '../scripts/constants.js';
import {profileButtonEdit} from '../scripts/constants.js';
import {profileButtonAdd} from '../scripts/constants.js';
import {inputName} from '../scripts/constants.js';
import {inputJob} from '../scripts/constants.js';

import {Card} from '../scripts/Card.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {Section} from '../scripts/Section.js';
import {PopupWithImage} from '../scripts/PopupWithImage.js';
import {PopupWithForm} from '../scripts/PopupWithForm.js';
import {UserInfo} from '../scripts/UserInfo.js';


 function createCard(newName, newLink, cardTemplate, imagePopup) {
  const card = new Card(newName, newLink, cardTemplate, imagePopup, () => {
      card._popupElement.setCardData(card._title, card._image);
      card._popupElement.open();
    }
  );
  cardsList.addItem(card.generateCard());
}

function showEditProfileForm(formProfileEditValidator) {
  const userInfo = user.getUserInfo();
  inputName.value = userInfo.user_name;
  inputJob.value = userInfo.about_self;
  formProfileEditValidator.clearFormInputError();
  profileFormPopup.open();
}

function showAddItemForm(formElementsAddValidator) {
  formElementsAddValidator.clearFormInputError();
  addItemFormPopup.open();
}

const user = new UserInfo(userInfoSettings);

const imagePopup = new PopupWithImage('.popup-elements-image');
imagePopup.setEventListeners();

const profileFormPopup = new PopupWithForm('.popup-profile-edit', (formData) => user.setUserInfo({user_name: formData.name, about_self: formData.job}));

profileFormPopup.setEventListeners();

const addItemFormPopup = new PopupWithForm('.popup-elements-add', (formData) => createCard(formData.name, formData.link, '.elements-template', imagePopup));

addItemFormPopup.setEventListeners();

const formProfileEditValidator = new FormValidator(enableValidationSettings, formProfileEdit);
formProfileEditValidator.enableValidation();

const formElementsAddValidator = new FormValidator(enableValidationSettings, formElementsAdd);
formElementsAddValidator.enableValidation();

profileButtonEdit.addEventListener('click', () => showEditProfileForm(formProfileEditValidator));

profileButtonAdd.addEventListener('click', () => showAddItemForm(formElementsAddValidator));

const cardsList = new Section({data: initialCards, renderer:
  ({name: newName, link: newLink}) => {
    createCard(newName, newLink, '.elements-template', imagePopup);
  }
}, '.elements__cards');

cardsList.renderItems();