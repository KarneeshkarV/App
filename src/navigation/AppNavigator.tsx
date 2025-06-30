import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import KYCWelcomeScreen from '../components/KYCWelcomeScreen';
import CountrySelectionScreen from '../components/CountrySelectionScreen';
import AddressInputScreen from '../components/AddressInputScreen';
import LegalAddressScreen from '../components/LegalAddressScreen';

export type RootStackParamList = {
  KYCWelcome: undefined;
  CountrySelection: undefined;
  AddressInput: { country: string };
  LegalAddress: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Screen 
          name="LegalAddress" 
          component={LegalAddressScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
