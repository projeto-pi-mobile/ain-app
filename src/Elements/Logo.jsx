import React, { memo } from 'react';
import { Image } from 'react-native';
import styles from '../assets/styles/styles';
const Logo = () => (
  <Image
    source={require('../assets/img/logo.png')}
    style={styles.image}
  />
);

export default memo(Logo);
