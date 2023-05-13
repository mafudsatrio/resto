import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto, isFavorite) => `
  <h2 class="movie__title">${resto.name}</h2>
  <img class="movie__poster" src="${resto.pictureId ? `${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    ${isFavorite ? `<button class="btn" onclick="deleteFavorite('${resto.id}', this)">Delete Favorite</button>` : `<button class="btn" onclick="addFavorite('${resto.id}', this)">Add to Favorite</button>`}
    <h4>Categories</h4>
    <p>${resto.categories.map((r) => r.name)}</p>
    <h4>Rating</h4>
    <div class="movie-item__header__rating">
    <p>⭐️<span class="movie-item__header__rating__score">${resto.rating}</span></p>
    </div>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
  <div class="movie__overview">
    <h3>Menu Makanan</h3>
    <p>
      ${resto.menus.foods.map((r) => r.name)}
    </p>
  </div>
  <div class="movie__overview">
    <h3>Menu Minuman</h3>
    <p>
      ${resto.menus.drinks.map((r) => r.name)}
    </p>
  </div>
  <div class="movie__overview">
    <h3>Review</h3>
    <p>
      ${resto.customerReviews.map((r) => `${r.name}:${r.review}, ${r.date}`)}
    </p>
  </div>
`;

const createRestoTemplate = (resto, button) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${resto.name}"
          src="${resto.pictureId ? `${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
    ${button}    
  </div>
`;

export { createRestoTemplate, createRestoDetailTemplate };
