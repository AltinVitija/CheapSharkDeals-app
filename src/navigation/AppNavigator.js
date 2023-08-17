import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GamesContainer from '../screens/GamesContainer';
import FilterScreen from '../screens/FilterScreen';
import GamesDetails from '../screens/GamesDetails';

const Stack = createStackNavigator();

const customSlideTransition = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen
          name="GamesContainer"
          component={GamesContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GamesDetails"
          component={GamesDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current, layouts}) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
