import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import KYCWelcomeScreen from '../components/KYCWelcomeScreen';
import CountrySelectionScreen from '../components/CountrySelectionScreen';
import AddressInputScreen from '../components/AddressInputScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="KYCWelcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen 
          name="KYCWelcome" 
          component={KYCWelcomeScreen} 
        />
        <Stack.Screen 
          name="CountrySelection" 
          component={CountrySelectionScreen} 
        />
        <Stack.Screen 
          name="AddressInput" 
          component={AddressInputScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
