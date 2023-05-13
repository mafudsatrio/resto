import { createRestoTemplate } from '../templates/template-creator';
import { GET_ALL } from '../../databases/favorite';

const Favorite = {
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
    const resto = await GET_ALL();
    const restaurantContainer = document.querySelector('#list-resto');
    resto.forEach(async (r) => {
      const button = `<button onclick="deleteFavorite('${r.id}', this)">delete</button>`;
      restaurantContainer.innerHTML += createRestoTemplate(r, button);
    });
  },
};

export default Favorite;
