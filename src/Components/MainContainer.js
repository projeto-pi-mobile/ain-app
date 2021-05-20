import React from 'react';
import { KeyboardAvoidingView, ImageBackground } from 'react-native';
import styles from './Styles/Styles';

export default function MainContainer({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/img/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
