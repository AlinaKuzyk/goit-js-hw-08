import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messagelEl = document.querySelector('textarea');
const LOCALE_STORAGE = 'feedback-form-state';
let dataForm = {};

savedMessage();

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

function savedMessage() {
  const data = JSON.parse(localStorage.getItem(LOCALE_STORAGE));
  if (data) {
    emailEl.value = data.email;
    messagelEl.value = data.message;
  }
}

formEl.addEventListener('submit', handleSubmitForm);
formEl.addEventListener('input', throttle(handleChangeForm, 500));
