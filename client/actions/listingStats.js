import { getListingTitle as getTitle } from '../lib/api';

export const getListingTitle = (id = 1) => {
  return dispatch => {
    return getTitle(id)
      .then(title => {
        return dispatch({
          type: 'TITLE_LOADED',
          data: title
        });
      })
      .catch(err => {
        console.log(`failed to fetch getTitle(): ${err}`);

        return dispatch({
          type: 'TITLE_ERROR',
          data: err
        });
      });
  };
};