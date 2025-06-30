import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type AddressInputScreenRouteProp = RouteProp<RootStackParamList, 'AddressInput'>;

const AddressInputScreen: React.FC<{ route: AddressInputScreenRouteProp }> = ({ route }) => {
  const { country } = route.params;

  return (
    <View>
      <Text>Selected Country: {country}</Text>
      <Text>Enter your address:</Text>
      {/* Add address input fields here */}
    </View>
  );
};

export default AddressInputScreen;
