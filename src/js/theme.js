import '../styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

switcherRef.addEventListener('change', switchTheme);

checkTheme();

function checkTheme() {
  if (localStorage.theme === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    switcherRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

function switchTheme(event) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);

  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
