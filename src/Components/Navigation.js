import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContext } from '../UseContext';
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';
import Login from './Login';
import Home from './Home';
import MyServices from './MyServices';
import AddService from './AddService';
import Stats from './Stats';
import Success from './Success';

export default function MainNavigator() {
  const Stack = createStackNavigator();
  const { login } = React.useContext(UserContext);
  return (
    <Stack.Navigator headerMode="none">
      {login ? (
        <React.Fragment>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MyServices"
            component={MyServices}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddService"
            component={AddService}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Stats"
            component={Stats}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{
              headerShown: false,
            }}
          />
        </React.Fragment>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterSuccess"
            component={RegisterSuccess}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
