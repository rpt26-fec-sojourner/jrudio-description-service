import React, { useEffect } from 'react';
import styles from '../styles/listingStats.module.css';

import {
  getListingID
} from '../helpers';

const ListingStats = (props) => {
  const {
    title,
    hostName,
    maxGuestCount,
    bedroomCount,
    bedCount,
    bathroomCount
  } = props;

  useEffect(() => {
    const id = getListingID();

    if (!id) {
      console.error('could not read the id from url');

      return;
    }

    props.getListingTitle(id);
  });

  return (
    <div>
      <div className={styles.title}>{title || 'An out of this world stow away'} hosted by {hostName || 'TARS'} <i>Insert host picture here</i></div>
      <div>{maxGuestCount} guests - {bedroomCount} bedroom - {bedCount} bed(s) - {bathroomCount} baths</div>
    </div>
  );
};

export default ListingStats;