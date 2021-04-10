import React from 'react';
import appStyles from '../styles/app.module.css';
import styles from '../styles/amenities.module.css';
import Icon from './icon';

import {
  combineStyles,
} from '../helpers';

const Amenity = (props) => {
  return null;
};

const Amenities = (props) => {
  const amenities = props.amenities ? props.amenities.map((amenities, i) => {
    return amenities.amenity.map((amenity, i) => {
      let _amenity = amenity.name;

      if (!amenity.isAvailable) {
        _amenity = <s>{amenity.name}</s>;
      }

      return (<p key={i}>{amenities.title} - {_amenity}</p>);
    });
  }) : null;

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
      {amenities}
    </div>
  );
};

export default Amenities;