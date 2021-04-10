import React from 'react';
import appStyles from '../styles/app.module.css';
import styles from '../styles/amenities.module.css';
import Icon from './icon';

import {
  combineStyles,
} from '../helpers';

const amenitiesWithIcons = new Set([
  'dedicated workspace',
  'tv',
  'heating',
  'air conditioning',
  'washer',
  'dryer',
  'wifi',
  'kitchen'
]);

const Amenity = (props) => {
  const {
    name
  } = props;

  return (
    <div className={styles.amenityWrapper2}>
      <div className={styles.amenityWrapper3}>
        <div className={styles.name}>{name}</div>

        <div className={styles.iconWrapper}>
          <Icon name={name} />
        </div>
      </div>
    </div>
  );
};

const renderAmenities = (amenities = []) => {
  const amenityNodes = [];
  const whitelist = new Set();
  let count = 0;

  for (let i = 0; i < amenities.length; i++) {
    let subAmenities = amenities[i];


    for (let j = 0; j < subAmenities.amenity.length; j++) {
      let amenity = subAmenities.amenity[j];

      count++;

      if (!amenity.isAvailable || !amenitiesWithIcons.has(amenity.name) || whitelist.has(amenity.name) ) {
        continue;
      }

      whitelist.add(amenity.name);

      amenityNodes.push(
        <Amenity key={amenity._id} name={amenity.name} />
      );
    }
  }

  return {
    count,
    nodes: amenityNodes
  };
};

const Amenities = (props) => {
  const handleShowAll = (event) => {
    event.preventDefault();

    console.log('showing all amenities');
  };

  const { amenities } = props;
  let amenityCount = 0;
  let amenityNodes = [];

  if (amenities && amenities.length > 0) {
    const result = renderAmenities(amenities);

    amenityNodes = result.nodes;
    amenityCount = result.count;
  }

  // Airbnb only lists 8 of the amenities and then provides
  // a button to display all
  // When you display all of the amenities they do not have an icon

  const sectionStyles = combineStyles(
    // appStyles.sectionWrapper,
    appStyles.sectionTitleWrapper
  );

  return (
    <div className={appStyles.sectionWrapper}>
      <div className={sectionStyles}>
        <div className={appStyles.sectionSubWrapper}>
          <h2 className={appStyles.sectionTitle}>Amenities</h2>
        </div>
      </div>

      <div className={styles.amenityWrapper}>
        {amenityNodes}
      </div>

      <div className={styles.showAllWrapper}>
        <a className={combineStyles(appStyles.button, styles.showAllButton)} href="?showMore=1" onClick={handleShowAll}>show all {amenityCount} amenities</a>
      </div>
    </div>
  );
};

export default Amenities;