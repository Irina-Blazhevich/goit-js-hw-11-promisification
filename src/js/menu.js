import '../styles.css';
import menuTemplate from '../templates/menuMarkup.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');

const menuMarkup = menuTemplate(menu);
menuListRef.insertAdjacentHTML('beforeend', menuMarkup);
