export const initialCards = [
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
  
  export const formProfileEdit = document.querySelector('.form-profile-edit');
  export const formElementsAdd = document.querySelector('.form-elements-add');
  
  export const profileButtonEdit = document.querySelector('.profile__button-edit');
  export const profileButtonAdd = document.querySelector('.profile__button-add');
  
  export const inputName = document.querySelector('.popup__field_input_name');
  export const inputJob = document.querySelector('.popup__field_input_job');

  export const name = document.querySelector('.profile__name');
  export const job = document.querySelector('.profile__job');

  export const enableValidationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_visible'
  };
  
  export const userInfoSettings = {
    user_name: 'Жак-Ив Кусто',
    about_self: 'Исследователь океана'
  };