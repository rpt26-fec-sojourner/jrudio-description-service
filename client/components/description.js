import React, { useEffect } from 'react';
import {
  getListingID
} from '../helpers';

function Description (props) {
  useEffect(() => {
    const id = getListingID();

    if (!id) {
      console.error('could not read the id from url');

      return;
    }

    props.getRoomListing(id);
  });

  const renderDescription = (description) => {
    return <p>{description}</p>;
  };

  const { description } = props;

  let innerText = 'Description not available';

  if (description) {
    innerText = renderDescription(description);
  }

  console.log(props);

  return (
    <div>
      {innerText}
    </div>
  );
}

export default Description;