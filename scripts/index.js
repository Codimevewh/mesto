// popup в DOM
const popup = document.querySelector('.popup');

// Botton сlose и edit в DOM
const popupClose = document.querySelector('.popup__botton-close');
const popupOpened = document.querySelector('.profile__botton-edit');

// forms в DOM
const formElement = document.querySelector('.popup__forms');

// input в DOM
const nameInput = formElement.querySelector('.popup__field_input_name');
const jobInput = formElement.querySelector('.popup__field_input_job');

// profile в DOM
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

// Пока все DOMа, Вкл/Выкл по click popup_opened

function addOrRemovePopup() {
    popup.classList.toggle('popup_opened')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

popupClose.addEventListener('click', addOrRemovePopup);
popupOpened.addEventListener('click', addOrRemovePopup);

// SaveForm textContent по value
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    addOrRemovePopup();
}

// Жми Botton-Save и да будет счастье
formElement.addEventListener('submit', formSubmitHandler);