import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import RestaurantSource from './data/restaurant-source';
import { STORE, DELETE } from './databases/favorite';
import { async } from 'regenerator-runtime';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addFavorite = async (id, that) => {
  that.innerHTML = 'delete'
  that.setAttribute('onclick', `deleteFavorite('${id}', this)`)
  
  // Store favorite
  const resto = await RestaurantSource.getDetail(id);
  await STORE(resto.restaurant);
}

window.deleteFavorite = async (id, that) => {
  that.innerHTML = 'add'
  that.setAttribute('onclick', `addFavorite('${id}', this)`)
  
  // Delete favorite
  await DELETE(id);
}