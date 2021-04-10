import React from 'react';
import styles from '../styles/sleepingArrangements.module.css';
import Icon from './icon';

import {
  combineStyles,
  getSleepingArrangementType
} from '../helpers';

const Arrangement = (props) => {
  return (
    <div>
      <div className={combineStyles(styles.border, styles.arrangementSubWrapper)}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>
            <Icon name={getSleepingArrangementType(props.subtitle)} />
          </span>
        </div>
        <div className={styles.arrangementTitle}>
          {props.name}
        </div>
        <div className={styles.arrangementSubtitle}>
          {props.subtitle}
        </div>
      </div>
    </div>
  );
};

const SleepingArrangements = (props) => {
  const sleepingArrangements = props.sleepingArrangements ? props.sleepingArrangements.map((arrangement, i) => {
    return <Arrangement key={i} {...arrangement} />;
  }) : null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Sleeping Arrangements</h2>
        </div>
      </div>

      <div className={styles.arrangementWrapper}>
        {sleepingArrangements}
      </div>
    </div>
  );
};

export default SleepingArrangements;