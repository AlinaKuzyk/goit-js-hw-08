var themeSwitcher=document.getElementById("theme-switch"),bodyEl=document.body;themeSwitcher.checked=!1;var savedTheme=localStorage.getItem("theme");function clickHandler(e){this.checked?(bodyEl.classList.remove("light"),bodyEl.classList.add("dark"),localStorage.setItem("theme","dark")):(bodyEl.classList.remove("dark"),bodyEl.classList.add("light"),localStorage.setItem("theme","light"))}function checkTheme(){var e=localStorage.getItem("theme")||"light";"dark"===e&&(themeSwitcher.checked=!0),bodyEl.classList=e}checkTheme(),bodyEl.classList=savedTheme,themeSwitcher.addEventListener("change",clickHandler);
//# sourceMappingURL=practice-2.7145b5b9.js.map