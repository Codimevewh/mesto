const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__botton-close');
const popupOpened = document.querySelector('.profile__botton-edit');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__field_input_name');
const jobInput = formElement.querySelector('.popup__field_input_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');


function addPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function removePopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    removePopup();
}

popupOpened.addEventListener('click', addPopup);

popupClose.addEventListener('click', removePopup);

formElement.addEventListener('submit', formSubmitHandler);