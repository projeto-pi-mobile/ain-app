import React, { memo } from 'react';
import { Image } from 'react-native';
import styles from '../assets/styles/styles';
const Icon = () => (
  <Image
    source={require('../assets/img/icon.png')}
    style={styles.icon}
  />
);

export default memo(Icon);
