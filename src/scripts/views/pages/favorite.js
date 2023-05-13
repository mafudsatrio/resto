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
    document.querySelector('.hero').style.display = 'block';
    const resto = await GET_ALL();
    const restaurantContainer = document.querySelector('#list-resto');
    resto.forEach(async (r) => {
      const button = `<button class="btn" onclick="deleteFavorite('${r.id}', this)">Delete Favorite</button>`;
      restaurantContainer.innerHTML += createRestoTemplate(r, button);
    });
  },
};

export default Favorite;
