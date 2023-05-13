import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.GET_ALL);
    return response.json();
  }

  static async getImage(resolution, id) {
    const response = await fetch(API_ENDPOINT.GET_IMAGE(resolution, id));
    return response.json();
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
