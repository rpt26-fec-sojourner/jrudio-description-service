import React, { useEffect } from 'react';
import appStyles from '../styles/app.module.css';
import styles from '../styles/description.module.css';



const Description = (props) => {
  const handleReadMore = (event) => {
    console.log(event);
    event.preventDefault();
  };

  const renderDescription = (description) => {
    return (
      <span className={styles.text}>
        {description}

        <a className={appStyles.button} href="?readMore=false" onClick={handleReadMore}>read more</a>
      </span>
    );
  };

  const handleContactButton = (event) => {
    event.preventDefault();
  };

  const renderContactButton = () => (<a href="?ayy=lmao" className={appStyles.button} onClick={handleContactButton}>Contact host</a>);

  const { description } = props;

  let innerText = 'Description not available';

  if (description) {
    innerText = renderDescription(description);
  }

  return (
    <div className={[appStyles.a, styles.wrapper, styles.description].join(' ')}>
      {innerText}

      <div className={styles.contact}>
        {renderContactButton()}
      </div>
    </div>
  );
};

export default Description;