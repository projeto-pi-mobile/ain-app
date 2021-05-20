import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, Title } from 'react-native-paper';
import styles from './Styles/Styles';
import MainContainer from './MainContainer';

export default function Success({ navigation }) {
  return (
    <MainContainer>
      <Ionicons style={styles.successIcon} name="checkmark-done-outline" />
      <Title style={styles.title}>Atividade cadastrada com sucesso!</Title>

      <Button
        style={styles.button}
        mode="text"
        onPress={() => navigation.navigate('Home')}
      >
        VER MINHAS ATIVIDADES
      </Button>
    </MainContainer>
  );
}
