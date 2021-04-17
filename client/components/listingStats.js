import React, { useEffect, Suspense } from 'react';
import { useImage } from 'react-image';
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

const Avatar = (props) => {
  const { src } = useImage({
    srcList: props.src
  });

  return <img className={styles.avatar} aria-hidden="true" alt={`Learn more about ${props.hostName}`} src={src} />;
};


const ListingStats = (props) => {
  const {
    avatarURL,
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
    props.getAvatar(id);
  });

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.titleWrapper}>
          <div className={styles.block}>
            <div className={styles.title}>
              {title || 'An out of this world stow away'} hosted by {hostName || 'TARS'}
            </div>

            <div className={listingStyles.subtitle}>
              {maxGuestCount} guests · {bedroomCount} bedroom{bedroomCount > 1 && 's'} · {bedCount} bed{bedCount > 1 && 's'} · {bathroomCount} bath{bathroomCount > 1 && 's'}
            </div>


          </div>

            {/* avatar */}
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarWrapper2}>

              <button aria-label={`Learn more about ${hostName}`} type="button" className={styles.avatarButton}>

                <div className={styles.avatarWrapper3}>

                  <div className={styles.avatarWrapper4} role="img" aria-busy="false" aria-label={`Learn more about ${hostName}`}>
                    <Suspense fallback={<img className={styles.avatar} aria-hidden="true" alt={`Learn more about ${hostName}`} />}>
                      <Avatar hostName={hostName} src={avatarURL} />}
                    </Suspense>

                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingStats;