import { fetch } from 'whatwg-fetch';

export const getAPIUrl = (endpoint = '', appendAPI = true) => {
  const {
    host,
    protocol
  } = window.location;

  let url = `${protocol}//${host}`;

  if (appendAPI) {
    url += '/api';
  }

  url += endpoint;

  return url
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

export const getListingTitle = (id = 1) => {
  if (!id) {
    throw new Error('id is required');
  }

  let endpoint = getAPIUrl(`/title/${id}`).replace('/api', '');

  return fetch(endpoint)
    .then(res => {
      if (res.status !== 200 || res.status === 404) {
        throw new Error(res.json());
      }

      return res.json();
    })
    .then(res => res.listingName)
    .catch(err => {
      console.error(`could not fetch listing title: ${err}`);
    });
};