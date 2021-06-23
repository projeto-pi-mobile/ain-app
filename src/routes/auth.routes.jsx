import React from "react";
import SignIn from "../pages/authPages/Signin";

import { createStackNavigator } from "@react-navigation/stack";
import Register from "../pages/authPages/Register";
import Success from "../pages/authPages/Success";

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
     <AuthStack.Screen
      name="Register"
      component={Register}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="Success"
      component={Success}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
