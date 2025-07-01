import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import KYCWelcomeScreen from "../components/KYCWelcomeScreen";
import CountrySelectionScreen from "../components/CountrySelectionScreen";
import AddressInputScreen from "../components/AddressInputScreen";
import LegalAddressScreen from "../components/LegalAddressScreen";
import BirthdayScreen from "../components/BirthdayScreen";
import PhoneNumberScreen from "../components/PhoneNumberScreen";
import PlaceOfBirthScreen from "../components/PlaceOfBirthScreen";
import EmiratesIdScreen from "../components/EmiratesIdScreen";
import SourceOfFundsScreen from "../components/SourceOfFundsScreen";
import EmploymentStatusScreen from "../components/EmploymentStatusScreen";
import PoliticallyExposedPersonScreen from "../components/PoliticallyExposedPersonScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="KYCWelcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="KYCWelcome" component={KYCWelcomeScreen} />
        <Stack.Screen
          name="CountrySelection"
          component={CountrySelectionScreen}
        />
        <Stack.Screen name="AddressInput" component={AddressInputScreen} />
        <Stack.Screen name="LegalAddress" component={LegalAddressScreen} />
        <Stack.Screen name="Birthday" component={BirthdayScreen} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
        <Stack.Screen name="PlaceOfBirth" component={PlaceOfBirthScreen} />
        <Stack.Screen name="EmiratesId" component={EmiratesIdScreen} />
        <Stack.Screen name="SourceOfFunds" component={SourceOfFundsScreen} />
        <Stack.Screen
          name="EmploymentStatus"
          component={EmploymentStatusScreen}
        />
        <Stack.Screen
          name="PoliticallyExposedPerson"
          component={PoliticallyExposedPersonScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
