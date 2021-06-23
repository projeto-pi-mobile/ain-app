import React from "react";
import Dashboard from "../pages/appPages/Dashboard";
import Profile from "../pages/appPages/Profile";
import NewActivity from "../pages/appPages/NewActivity";

import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../contexts/auth";
import { IconButton } from "react-native-paper";
import Success from "../pages/appPages/Success";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const { user, signOut } = useAuth();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerStyle: {
            backgroundColor: "#8257E5",
          },
          headerLeft: null,
          headerTintColor: "#fff",
          headerTitle: `Olá, ${user?.name}!`,
          headerRight: () => (
            <IconButton
              icon="exit-to-app"
              color={"#FFF"}
              size={25}
              onPress={signOut}
            />
          ),
        }}
      />
      <AppStack.Screen
        name="Account"
        component={Profile}
        options={{
          headerTitle: "Minha conta",
          headerStyle: {
            backgroundColor: "#8257E5",
          },
          headerTintColor: "#fff",
          headerRight: () => (
            <IconButton
              icon="exit-to-app"
              color={"#FFF"}
              size={25}
              onPress={signOut}
            />
          ),
        }}
      />

      <AppStack.Screen
        name="NewActivity"
        component={NewActivity}
        options={{
          headerTitle: "Nova atividade",
          headerStyle: {
            backgroundColor: "#8257E5",
          },
          headerTintColor: "#fff",
          headerRight: () => (
            <IconButton
              icon="exit-to-app"
              color={"#FFF"}
              size={25}
              onPress={signOut}
            />
          ),
        }}
      />

      <AppStack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
          headerTintColor: "#fff",
          headerRight: () => (
            <IconButton
              icon="exit-to-app"
              color={"#FFF"}
              size={25}
              onPress={signOut}
            />
          ),
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
