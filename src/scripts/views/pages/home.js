import RestaurantSource from '../../data/restaurant-source';
import { createRestoTemplate } from '../templates/template-creator';
import { GET_DETAIL } from '../../databases/favorite';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List Resto</h2>
        <div id="list-resto" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const getResto = await RestaurantSource.getAll();
    const resto = getResto.restaurants;
    const restaurantContainer = document.querySelector('#list-resto');
    resto.forEach(async (r) => {
      const data = await GET_DETAIL(r.id);
      const button = data ? `<button onclick="deleteFavorite('${r.id}', this)">delete</button>` : `<button onclick="addFavorite('${r.id}', this)">add</button>`;

      restaurantContainer.innerHTML += createRestoTemplate(r, button);
    });
  },
};

export default Home;
