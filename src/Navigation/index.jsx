import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Activities from '../pages/appPages/Activities';
import Statistics from '../pages/appPages/Statistics';

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'#8257E5',
        indicatorStyle: {
          backgroundColor: '#8257E5',
          
      },
      }}>
        <Tab.Screen name="Minhas atividades" component={Activities} />
        <Tab.Screen name="Estatísticas" component={Statistics} />
      </Tab.Navigator> 
  );
}

export default Navigation;