import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';
const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
test('navigates from Home to Details screen', () => {
  const {getByText} = render(
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>,
  );

  const button = getByText('Go to details');
  fireEvent.press(button);

  expect(getByText('Details Screen')).toBeTruthy();
});
