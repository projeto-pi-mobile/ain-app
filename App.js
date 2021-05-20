import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/UseContext';
import Navigation from './src/Components/Navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import styles from './src/Components/Styles/Styles';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8257E5',
    accent: '#04D361',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </UserProvider>
    </PaperProvider>
  );
}
