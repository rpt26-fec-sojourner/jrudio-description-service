import { fetch } from 'whatwg-fetch';

// webpack injects the environment variable APP_URL here
const baseURL = APP_URL;

export const getAPIUrl = (endpoint = '') => {
  return `${baseURL}/api${endpoint}`;
};

export const getFullListing = (id = 1) => {
  if (!id) {
    throw new Error('id is required');
  }

  const endpoint = `/listing/${id}`;

  return fetch(getAPIUrl(endpoint))
    .then(res => {
      if (res.status !== 200 || res.status === 404) {
        throw new Error(res.json());
      }

      return res.json();
    })
    .then(res => res.result)
    .catch(err => {
      console.error(`could not fetch full listing: ${err}`);
    });
};