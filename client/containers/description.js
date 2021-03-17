import { connect } from 'react-redux';
import React from 'react';

import { getListing } from '../actions/listing';
import Description from '../components/description';

const mapStateToProps = (state) => {
  const { listing } = state;


  let description = '';

  if (listing.listingID) {
    description = listing.description;
  }

  return { description };
};

const mapDispatchToProps = (dispatch) => ({
  getRoomListing: (id) => dispatch(getListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);