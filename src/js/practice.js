// get all action buttons

const actions = document.querySelectorAll('[data-action]');
const counterValue = document.querySelector('.counter-value');

// get counter value from local storage, if there is no value pass 0
let counter = JSON.parse(localStorage.getItem('counter')) || 0;
console.log(counter);
counterValue.textContent = counter;
// change counters text in html to current value
actions.forEach(action =>
  action.addEventListener('click', () => {
    const action_name = action.dataset.action;
    if (action_name === 'increase') {
      counter += 1;
    }
    if (action_name === 'decrease') {
      counter -= 1;
    }
    if (action_name === 'reset') {
      counter = 0;
    }
    if (action_name === 'save') {
      localStorage.setItem('counter', counter);
    }
    if (action_name === 'clear-save') {
      localStorage.removeItem('counter');
    }
    counterValue.textContent = counter;
    console.log(counter);
  })
);

// for all action buttons add event listener
// action_name 'increase' => counter++;
// action_name 'decrease' => counter--;
// action_name 'reset' => counter = 0;
// action_name 'save' => set current counter valueto LS;
// action_name 'clear-save' => clear LS;

// in every action, update counter text in html
