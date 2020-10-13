import React from 'react';
import styles from './styles.scss';

const Root = ({ Router, children, subs }) => {
  return (
    <div className={styles.rootAdmin}>
      This is Root Module. Please access child path
      <Router />
      {children}
      {subs}
    </div>
  );
};

export default Root;
