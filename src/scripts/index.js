import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import RestaurantSource from './data/restaurant-source';
import { STORE, DELETE } from './databases/favorite';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#mainContent');

skipLink.addEventListener('click', (ev) => {
  ev.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addFavorite = async (id, that) => {
  const that2 = that;
  that2.innerHTML = 'Delete Favorite';
  that2.setAttribute('onclick', `deleteFavorite('${id}', this)`);

  // Store favorite
  const resto = await RestaurantSource.getDetail(id);
  await STORE(resto.restaurant);
};

window.deleteFavorite = async (id, that) => {
  const that2 = that;
  that2.innerHTML = 'Add to Favorite';
  that2.setAttribute('onclick', `addFavorite('${id}', this)`);

  // Delete favorite
  await DELETE(id);
};
