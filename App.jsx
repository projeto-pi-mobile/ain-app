import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes";
import { Provider as PaperProvider } from "react-native-paper";
import Theme from './src/assets/styles/Theme';



const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider theme={Theme}>
          <Routes />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
