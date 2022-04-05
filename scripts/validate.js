const enableValidationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_visible'
}

// show input error
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

// hidden input error
const hiddenInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

//
function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    }
    else {
      hiddenInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  }
  
// 
function hasInvalidInput (inputList) {
    return Array.from(inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
// 
function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
  
// set listeners input
function setEventListeners (formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) {
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  }

// validation form
function  enableValidation(validationSettings) {
    const formList = document.querySelectorAll(validationSettings.formSelector);
    formList.forEach((formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
      const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
      setEventListeners (formElement, inputList, buttonElement,
        validationSettings.inactiveButtonClass, validationSettings.inputErrorClass, validationSettings.errorClass);
    });
  }
  
// clearInputError
function clearFormInputError(form) {
    const inputList =  form.querySelectorAll(enableValidationSettings.inputSelector);
    inputList.forEach((inputElement) =>
     hiddenInputError(form, inputElement, enableValidationSettings.inputErrorClass,
        enableValidationSettings.errorClass));
    }

enableValidation(enableValidationSettings);
