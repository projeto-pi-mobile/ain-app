import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, Title } from 'react-native-paper';
import styles from './Styles/Styles';
import MainContainer from './MainContainer';

export default function RegisterSuccess({ navigation }) {
  return (
    <MainContainer>
      <Ionicons style={styles.successIcon} name="checkmark-done-outline" />
      <Title style={styles.title}>Cadastrado com sucesso!</Title>

      <Button mode="text" onPress={() => navigation.navigate('Login')}>
        ENTRAR
      </Button>
    </MainContainer>
  );
}
