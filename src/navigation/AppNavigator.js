import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GamesContainer from '../screens/GamesContainer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GamesContainer" component={GamesContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
