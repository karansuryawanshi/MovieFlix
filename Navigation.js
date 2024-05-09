import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React, {component} from 'react';
import HomeScreens from './screens/HomeScreens';
import MovieScreens from './screens/MovieScreens';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreens}
        />

        <Stack.Screen
          name="Movie"
          options={{headerShown: false}}
          component={MovieScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
