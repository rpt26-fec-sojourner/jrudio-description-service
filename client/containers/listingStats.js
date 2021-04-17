import { connect } from 'react-redux';
import React from 'react';

import {
  getAvatar,
  getListingTitle,
  getHostInfo
} from '../actions/listingStats';
import ListingStats from '../components/listingStats';

const mapStateToProps = (state) => {
  const { listing } = state;

  return {
    avatarURL: listing.avatarURL,
    title: listing.title,
    hostName: listing.hostName,
    maxGuestCount: listing.maxGuestCount,
    bedroomCount: listing.roomCount,
    bedCount: listing.bedCount,
    bathroomCount: listing.bathroomCount
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAvatar: (id) => dispatch(getAvatar(id)),
  getListingTitle: (id) => dispatch(getListingTitle(id)),
  getHostInfo: (id) => dispatch(getHostInfo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingStats);