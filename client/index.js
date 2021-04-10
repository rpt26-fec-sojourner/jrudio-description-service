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

/* Components */
import Description from './containers/description';
import ListingHighlights from './containers/highlights';
import ListingStats from './containers/listingStats';
import SleepingArrangements from './containers/sleepingArrangements';
import Amenities from './containers/amenities';
import Border from './components/border';

const App = (props) => {
  useEffect(() => {
    const id = getListingID();

    if (!id) {
      console.error('could not read the id from url');

      return;
    }

    props.getRoomListing(id);
  });

  const appStyles = []
  appStyles.push(styles['airbnb-font']);
  appStyles.push(styles.wrapper);

  return (
    <Router>
      <div className={appStyles.join(' ') }>
        <ListingStats />
        <Border />
        <ListingHighlights />
        <Border />
        <Description />
        <Border />
        <SleepingArrangements />
        <Border />
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