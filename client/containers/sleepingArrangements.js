import { connect } from 'react-redux';
import React from 'react';

import SleepingArrangements from '../components/sleepingArrangements';

const mapStateToProps = (state) => {
  const { listing } = state;

  let sleepingArrangements = [];

  if (listing.listingID) {
    sleepingArrangements = listing.sleepingArrangements;
  }

  return { sleepingArrangements };
};

export default connect(mapStateToProps, null)(SleepingArrangements);