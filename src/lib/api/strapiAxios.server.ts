import axios from 'axios';
import { STRAPI_API_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL } from '$env/static/public';

const strapiAxios = axios.create({
  baseURL: `${PUBLIC_STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${STRAPI_API_KEY}`,
  },
});

export default strapiAxios;
