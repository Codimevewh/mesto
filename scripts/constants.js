///////////////////////////// constants //////////////////////////////

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileButtonAdd = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elementsСontainer = document.querySelector('.elements__cards');

//template for elements
const elementsTemplate = document.querySelector('.elements-template');

//popup profile edit
const popupProfileEdit = document.querySelector('.popup-profile-edit');
const formProfileEdit = document.querySelector('.form-profile-edit');
const popupProfileEditClose = document.querySelector('.profile-edit-close');
const inputName = formProfileEdit.querySelector('.popup__field_input_name');
const inputJob = formProfileEdit.querySelector('.popup__field_input_job');

//popup elements add
const popupElementsAdd = document.querySelector('.popup-elements-add');
const formElementsAdd = document.querySelector('.form-elements-add');
const popupElementsAddClose = document.querySelector('.elements-add-close');
const inputNameElements = formElementsAdd.querySelector('.popup__field_input_name-elements');
const inputLinksElements = formElementsAdd.querySelector('.popup__field_input_links-elements');

//popup elements image
const popupElementsImage = document.querySelector('.popup-elements-image');
const popupElementsImageClose = document.querySelector('.elements-image-close');
const popupContainerElementsImage = document.querySelector('.popup-elements-image__image');
const popupContainerElementsImageTitle = document.querySelector('.popup-elements-image__title')
////////////////////////////////////////////////////////////////////////

const enableValidationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_visible'
}