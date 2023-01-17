import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Jobs from './pages/JobsPage';
import Favorites from './pages/FavoritesPage';
import JobsDetails from './pages/JobDetailsPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function JobStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="JobsDetails" component={JobsDetails} />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Job" component={JobStackNavigator} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
