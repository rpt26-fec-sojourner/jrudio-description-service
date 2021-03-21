import { connect } from 'react-redux';
import React from 'react';

import Description from '../components/description';

const mapStateToProps = (state) => {
  const { listing } = state;


  let description = '';

  if (listing.listingID) {
    description = listing.description;
  }

  return { description };
};

export default connect(mapStateToProps, null)(Description);