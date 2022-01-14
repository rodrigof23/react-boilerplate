import React from 'react';

import styles from './loading.module.scss';

const Loading = ({ show }) => {
  return (
    show && (
      <div className={styles.backdrop}>
        <div className={styles.spinner} />
      </div>
    )
  );
};

export default Loading;
