import React, { useEffect } from 'react';
import styles from '../styles/border.module.css';

const Border = () => (<div className={[styles.color, styles.border].join(' ')}></div>);

export default Border;