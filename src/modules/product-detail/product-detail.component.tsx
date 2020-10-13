import React from 'react';
import { Title, Grid, Loading } from '@khanhnguyen234/react-components';
import styles from './styles.scss';

const ProductDetail = () => {
  return (
    <Grid container className={styles.root}>
      Product detail admin
    </Grid>
  );
};

export default React.memo(ProductDetail);
