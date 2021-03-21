import { connect } from 'react-redux';
import React from 'react';

import ListingHighlights from '../components/highlights';

const mapStateToProps = (state) => {
  const { listing } = state;

  let highlights = [];

  if (listing.listingID) {
    highlights = listing.listingHighlights;
  }

  return { highlights };
};

export default connect(mapStateToProps, null)(ListingHighlights);