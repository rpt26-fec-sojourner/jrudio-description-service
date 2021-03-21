import React from 'react';

const ListingStats = (props) => {
  const {
    title,
    hostName,
    maxGuestCount,
    bedroomCount,
    bedCount,
    bathroomCount
  } = props;

  return (
    <div>
      <h3>{title || 'An out of this world stow away'} hosted by {hostName || 'TARS'} <i>Insert host picture here</i></h3>
      <sub>{maxGuestCount} guests - {bedroomCount} bedroom - {bedCount} bed(s) - {bathroomCount} baths</sub>
    </div>
  );
};

export default ListingStats;