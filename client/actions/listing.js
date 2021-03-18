import { getFullListing } from '../lib/api';

export const getListing = (id = 1) => {
  return dispatch => {
    return getFullListing(id)
      .then(listing => {
        return dispatch({
          type: 'FULL_LISTING_LOADED',
          data: listing
        })
      })
      .catch(err => {
        console.log(`failed to fetch getListing(): ${err}`);

        return dispatch({
          type: 'FULL_LISTING_ERROR',
          data: err
        });
      });
  };
};