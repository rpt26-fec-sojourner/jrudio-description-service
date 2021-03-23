import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from './store';
import styles from './styles/app.module.css';

import { getListing } from './actions/listing';
import { getListingID } from './helpers';

import Description from './containers/description';
import ListingHighlights from './containers/highlights';
import ListingStats from './containers/listingStats';
import SleepingArrangements from './containers/sleepingArrangements';
import Amenities from './containers/amenities';

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
      <div className={styles.text}>
        <ListingStats />
        <ListingHighlights />
        <Description />
        <SleepingArrangements />
        <Amenities />
      </div>
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
  </Provider>, document.querySelector('#description'));