import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles/app.css';
import { getFullListing } from './lib/api';

getFullListing()
  .then(listing => {
    console.log(listing);
  })
  .catch(err => {
    console.error(err);
  });

const App = () => {
  return (
    <p>my first component!</p>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app'));