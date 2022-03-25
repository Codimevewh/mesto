///////////////////////////// constants //////////////////////////////

const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileButtonAdd = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//container for elements
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
const popupContainerElementsImage = document.querySelector('.elements-image');
const popupContainerElementsImageTitle = document.querySelector('.elements-image__title')
////////////////////////////////////////////////////////////////////////

////////////////////// function add & remove popup /////////////////////

//add popup
function addPopup(popup) {
    popup.classList.add('popup_opened');
}

//remove popup
function removePopup(popup) {
    popup.classList.remove('popup_opened');
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
function formSubmitProfileEdit (evt) {
    evt.preventDefault();
    textContentsProfile();
    removePopup(popupProfileEdit);
}

//////////////////////// function elements /////////////////////////

//template clone card
function templateCloneCards(card) {
    const elementsCard = elementsTemplate.content.cloneNode(true);
    const elementsImage = elementsCard.querySelector('.elements__image');
    elementsCard.querySelector('.elements__like').addEventListener('click', elementsLike);
    elementsCard.querySelector('.elements__trash').addEventListener('click', removeElements);
    elementsCard.querySelector('.elements__title').textContent = card.name;
    elementsImage.src = card.link;
    elementsImage.alt = card.name;
    elementsImage.addEventListener('click', () => AddElementsImage(card.link, card.name));
    return elementsCard;
}

//render elements
function renderCard() {
    initialCards.forEach((card) => {
        const elementsCards = templateCloneCards(card);
        elementsСontainer.append(elementsCards);
    });
}
renderCard();

//textcontents elements
function contentElements() {
    const card = {
        name: inputNameElements.value,
        link: inputLinksElements.value
    };
    const elementsContent = templateCloneCards(card);
    elementsСontainer.prepend(elementsContent);
}

//remove elements
function removeElements(evt) {
    evt.target.closest('.elements__card').remove();
}

//like elements
function elementsLike(evt) {
    evt.target.closest('.elements__like').classList.toggle('elements__like_active');
}

//save data elements
function submitElementsAdd(evt) {
    evt.preventDefault();
    contentElements();
    removePopup(popupElementsAdd);
}

////////////////////////// function image ///////////////////////////

//open image
function AddElementsImage(src, alt) {
    addPopup(popupElementsImage);
    popupContainerElementsImage.src = src;
    popupContainerElementsImage.alt = alt;
    popupContainerElementsImageTitle.textContent = alt;
}

/////////////////////////// Open Popup /////////////////////////////

//open popup profile
profileButtonEdit.addEventListener('click', () => {
    inputsValueProfile();
    addPopup(popupProfileEdit);
});

//open popup elements
profileButtonAdd.addEventListener('click', () => {
    formElementsAdd.reset();
    addPopup(popupElementsAdd);
});

/////////////////////////// Close Popup ////////////////////////////

//close popup profile
popupProfileEditClose.addEventListener('click', () => removePopup(popupProfileEdit));

//close popup elements
popupElementsAddClose.addEventListener('click', () => removePopup(popupElementsAdd));

/////////////////////////// Close Image ////////////////////////////

//close image
popupElementsImage.addEventListener('click', () => removePopup(popupElementsImage));

/////////////////////////// Save data button ///////////////////////

//save data button profile
formProfileEdit.addEventListener('submit', formSubmitProfileEdit);

//save data button elements
formElementsAdd.addEventListener('submit', submitElementsAdd);