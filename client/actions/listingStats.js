import {
  getListingTitle as getTitle,
  getHostInfo as getHost
} from '../lib/api';

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

export const getHostInfo = (id = 1) => {
  return dispatch => {
    return getHost(id)
      .then(info => dispatch({ type: 'HOST_INFO_LOADED', data: info }))
      .catch(err => {
        console.error(err);

        return dispatch({
          type: 'HOST_INFO_ERROR',
          data: err
        });
      });
  };
};