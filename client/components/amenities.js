import React from 'react';

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

  return (
    <div>
      {amenities}
    </div>
  );
};

export default Amenities;