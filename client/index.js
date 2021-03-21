import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from './store';
import './styles/app.css';

import { getListing } from './actions/listing';
import { getListingID } from './helpers';

import Description from './containers/description';
import ListingHighlights from './containers/highlights';
import SleepingArrangements from './containers/sleepingArrangements';

const App = (props) => {
  useEffect(() => {
    const id = getListingID();

    if (!id) {
      console.error('could not read the id from url');

      return;
    }

    props.getRoomListing(id);
  });

  return (
    <Router>
      <ListingHighlights />
      <Description />
      <SleepingArrangements />
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getRoomListing: (id) => dispatch(getListing(id))
});

const AppContainer = connect(null, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.querySelector('#app-justin-description'));