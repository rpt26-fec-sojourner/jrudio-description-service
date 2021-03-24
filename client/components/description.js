import React, { useEffect } from 'react';
// import styles from '../styles/app.module.css';
import styles from '../styles/app.module.css';
import descriptionStyles from '../styles/description.module.css';



const Description = (props) => {
  const renderDescription = (description) => {
    return (<span>
      {description}
      <a href="?readMore=false">read more</a>
    </span>);
  };

  const handleContactButton = (event) => {
    event.preventDefault();
  };

  const renderContactButton = () => (<a href="?ayy=lmao" onClick={handleContactButton}>Contact host</a>);

  const { description } = props;

  let innerText = 'Description not available';

  if (description) {
    innerText = renderDescription(description);
  }

  return (
    <div className={[descriptionStyles.wrapper, descriptionStyles.description].join(' ')}>
      {innerText}

      {renderContactButton()}
    </div>
  );
};

export default Description;