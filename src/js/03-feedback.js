import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALE_STORAGE = 'feedback-form-state';
let dataForm = {};

const handleSubmitForm = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(LOCALE_STORAGE);
};

const handleChangeForm = elem => {
  dataForm[elem.target.name] = elem.target.value;
  localStorage.setItem(LOCALE_STORAGE, JSON.stringify(dataForm));
  console.log(dataForm);
};

const savedMessage = JSON.parse(localStorage.getItem(LOCALE_STORAGE));
if (savedMessage) {
  formEl.email.value = savedMessage.email;
  formEl.message.value = savedMessage.message;
  console.log(savedMessage);
}

formEl.addEventListener('submit', handleSubmitForm);
formEl.addEventListener('input', throttle(handleChangeForm, 500));
