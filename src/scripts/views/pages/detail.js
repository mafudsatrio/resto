import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import { GET_DETAIL } from '../../databases/favorite';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="movie"></div>
    `;
  },

  async afterRender() {
    document.querySelector('.hero').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getDetail = await RestaurantSource.getDetail(url.id);
    const favorite = await GET_DETAIL(url.id);
    const isFavorite = typeof favorite !== 'undefined';
    const { restaurant } = getDetail;
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant, isFavorite);
  },
};

export default Detail;
