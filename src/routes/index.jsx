import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../contexts/auth";

import AppRoutes from './app.routes';
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { signed } = useAuth();

  

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
