// popup в DOM
const popup = document.querySelector('.popup');

// Botton сlose и edit в DOM
const popupClose = document.querySelector('.popup__botton-close');
const popupOpened = document.querySelector('.profile__botton-edit');

// forms в DOM
const formElement = document.querySelector('.popup__forms');

// input в DOM
const nameInput = formElement.querySelector('.popup__field_name');
const jobInput = formElement.querySelector('.popup__field_job');

// profile в DOM
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');


function addOrRemovePopup() {
    popup.classList.toggle('popup_opened')
}

popupClose.addEventListener('click', addOrRemovePopup);
popupOpened.addEventListener('click', addOrRemovePopup);

// SaveForm
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    addOrRemovePopup();
}

// Жми SaveBotton
formElement.addEventListener('submit', formSubmitHandler);