import React  from 'react'
import styles from './styles.module.scss';

const HelloReact = ({ text = 'Hello React' }) => {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export default HelloReact
