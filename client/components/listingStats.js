import React, { useEffect } from 'react';
import styles from '../styles/listingStats.module.css';
import appStyles from '../styles/app.module.css';

import {
  getListingID
} from '../helpers';

const listingStyles = (() => {
  const subtitle = [];
  subtitle.push(appStyles['text-color']);
  subtitle.push(styles.stats);

  return {
    subtitle: subtitle.join(' ')
  }
})();


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
    props.getHostInfo(id);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title || 'An out of this world stow away'} hosted by {hostName || 'TARS'}

        <div className={styles.avatarWrapper}>
          <div className={styles.avatarWrapper2}>
            <img className={styles.avatar}>
          </div>
        </div>
      </div>
      <div className={listingStyles.subtitle}>{maxGuestCount} guests · {bedroomCount} bedroom{bedroomCount > 1 && 's'} · {bedCount} bed{bedCount > 1 && 's'} · {bathroomCount} bath{bathroomCount > 1 && 's'}</div>
    </div>
  );
};

export default ListingStats;