// console.log('START theme.js');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkboxRef = document.getElementById('theme-switch-toggle');

let saveTheme = localStorage.getItem('Theme');

if (!saveTheme || saveTheme === Theme.LIGHT) {
  onSwitchLightTheme();
} else {
  //   checkboxRef.checked = true;
  onSwitchDarkTheme();
}

console.log(checkboxRef.checked);

checkboxRef.addEventListener('change', event => {
  console.log(event.target.checked);
  if (event.target.checked) {
    onSwitchDarkTheme();
  } else {
    onSwitchLightTheme();
  }
});

function onSwitchLightTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.setItem('Theme', Theme.LIGHT);
}

function onSwitchDarkTheme() {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.DARK);
  checkboxRef.checked = true;
}

// console.log('END theme.js');
