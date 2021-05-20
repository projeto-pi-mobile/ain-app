import React, { memo } from 'react';
import { Image } from 'react-native';
import styles from '../Styles/Styles';
const Logo = () => (
  <Image
    source={require('../../../assets/img/logo.png')}
    style={styles.image}
  />
);

export default memo(Logo);
