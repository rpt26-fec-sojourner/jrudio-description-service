import React, { useEffect } from 'react';

const Description = (props) => {
  const renderDescription = (description) => {
    return <p>{description}</p>;
  };

  const { description } = props;

  let innerText = 'Description not available';

  if (description) {
    innerText = renderDescription(description);
  }

  return (
    <div>
      {innerText}
    </div>
  );
};

export default Description;