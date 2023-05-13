import CONFIG from './config';

const API_ENDPOINT = {
  GET_ALL: `${CONFIG.BASE_URL}list`,
  GET_IMAGE: (resolution, id) => `${CONFIG.BASE_IMAGE_URL}${resolution}/${id}}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
