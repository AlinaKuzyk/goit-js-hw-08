// refs
const themeSwitcher = document.getElementById('theme-switch');
const bodyEl = document.body;

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;
const savedTheme = localStorage.getItem('theme');
checkTheme();

bodyEl.classList = savedTheme;

function clickHandler(el) {
  const isChecked = this.checked;
  if (isChecked) {
    bodyEl.classList.remove('light');
    bodyEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyEl.classList.remove('dark');
    bodyEl.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function checkTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    themeSwitcher.checked = true;
  }
  bodyEl.classList = savedTheme;
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
}

// add event listener
themeSwitcher.addEventListener('change', clickHandler);
