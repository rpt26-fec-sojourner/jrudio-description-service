import { connect } from 'react-redux';
import React from 'react';

import {
  getListingTitle
} from '../actions/listingStats';
import ListingStats from '../components/listingStats';

const mapStateToProps = (state) => {
  const { listing } = state;

  return {
    title: listing.title,
    hostName: listing.hostName,
    maxGuestCount: listing.maxGuestCount,
    bedroomCount: listing.roomCount,
    bedCount: listing.bedCount,
    bathroomCount: listing.bathroomCount
  };
};

const mapDispatchToProps = (dispatch) => ({
  getListingTitle: (id) => dispatch(getListingTitle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingStats);