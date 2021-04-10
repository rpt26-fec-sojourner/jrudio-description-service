import React from 'react';
import Icon from './icon';
import styles from '../styles/highlights.module.css';
import appStyle from '../styles/app.module.css';
import { getHighlightType } from '../helpers'

const hightlightStyles = (() => {
  let s = [];
  let t = [];

  s.push(appStyle.text);
  s.push(styles.subWrapper);

  t.push(styles.title);
  t.push(styles.textWrapper);

  return s.join(' ');
})();

const ListingHighlights = (props) => {
  const highlights = props.highlights ? props.highlights.map((highlight, i) => {
    return (
      <div className={hightlightStyles} key={i}>
        <div className={styles.icon}>
          <Icon name={getHighlightType(highlight.title)} />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.title}>
            {highlight.title}
          </div>
          <div className={styles.subtitle}>
            {highlight.subtitle}
          </div>
        </div>
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