import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messagelEl = document.querySelector('textarea');
const LOCALE_STORAGE = 'feedback-form-state';
let data = {};

const handleChangeForm = elem => {
  data[elem.target.name] = elem.target.value;
  localStorage.setItem(LOCALE_STORAGE, JSON.stringify(data));
};

const handleSubmitForm = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(LOCALE_STORAGE);
  data = {};
};

savedMessage();

function savedMessage() {
  data = JSON.parse(localStorage.getItem(LOCALE_STORAGE)) || {};
  const formData = data;
  const email = emailEl;
  const message = messagelEl;
  if (formData) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}

formEl.addEventListener('submit', handleSubmitForm);
formEl.addEventListener('input', throttle(handleChangeForm, 500));
