import React, { useEffect } from 'react';

function Description (props) {
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