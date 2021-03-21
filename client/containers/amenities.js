import { connect } from 'react-redux';
import React from 'react';

import Amenities from '../components/amenities';

const mapStateToProps = (state) => {
  const { listing } = state;

  let amenities = [];

  if (listing.listingID) {
    amenities = listing.amenities;
  }

  return { amenities };
};

export default connect(mapStateToProps, null)(Amenities);