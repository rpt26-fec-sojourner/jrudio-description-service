// import { combineReducers } from 'redux';

const initialState = {
  listing: {}
};

// export default combineReducers();
export default (state = initialState, action) => {
  switch (action.type) {
  case 'FETCHED_LISTING':
    return { ...state, listing: action.listing };
  default:
    return state;
  }
};