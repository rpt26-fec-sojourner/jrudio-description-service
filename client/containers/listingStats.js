import { connect } from 'react-redux';
import React from 'react';

import ListingStats from '../components/listingStats';

const mapStateToProps = (state) => {
  const { listing } = state;

  return {
    title: '',
    hostName: '',
    maxGuestCount: listing.maxGuestCount,
    bedroomCount: listing.bedroomCount,
    bedCount: listing.bedCount,
    bathroomCount: listing.bathroomCount
  };
};

export default connect(mapStateToProps, null)(ListingStats);