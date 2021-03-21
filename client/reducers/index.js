import { combineReducers } from 'redux';
import listingReducer from './listing';

export default combineReducers({
  listing: listingReducer
});