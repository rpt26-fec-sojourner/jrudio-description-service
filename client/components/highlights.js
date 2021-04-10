import React from 'react';
import styles from '../styles/highlights.module.css';
import appStyle from '../styles/app.module.css';

const ListingHighlights = (props) => {
  const highlights = props.highlights ? props.highlights.map((highlight, i) => {
    return (
      <div className={appStyle.text} key={i}>
        <div className={styles.title}>{highlight.title}</div>
        <div className={styles.subtitle}>{highlight.subtitle}</div>
      </div>
    );
  }) : null;

  return (
    <div className={styles.wrapper}>
      {highlights}
    </div>
  );
};

export default ListingHighlights;