import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const AddressInputScreen = ({ navigation, route }) => {
  const { selectedCountry } = route.params || {};
  const [address, setAddress] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (!address.trim()) {
      Alert.alert('Please enter your address', 'Address is required to continue.');
      return;
    }
    
    // Navigate to next screen or complete KYC flow
    Alert.alert(
      'KYC Information Collected',
      `Country: ${selectedCountry?.label || 'Not selected'}\nAddress: ${address}`,
      [
        {
          text: 'Continue',
          onPress: () => {
            // Navigate to next screen in your KYC flow
            console.log('Continue to next step');
          },
        },
      ]
    );
  };

  const handleSkip = () => {
    console.log('Skip address input');
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={globalStyles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
          
          <Text style={styles.stepText}>Step 1/11</Text>
          
          <TouchableOpacity style={styles.skipHeaderButton} onPress={handleSkip}>
            <Text style={styles.skipHeaderText}>Save & Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Content Card */}
        <View style={[globalStyles.card, { marginTop: 40 }]}>
          <Text style={globalStyles.title}>Select your country of citizenship</Text>
          <Text style={globalStyles.subtitle}>
            Type your address
          </Text>

          {/* Selected Country Display */}
          {selectedCountry && (
            <View style={styles.selectedCountryContainer}>
              <View style={styles.countryFlag}>
                <Text style={styles.flagText}>
                  {selectedCountry.label}
                </Text>
              </View>
            </View>
          )}

          {/* Address Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.addressInput}
              placeholder="Enter your full address"
              placeholderTextColor={colors.gray}
              value={address}
              onChangeText={setAddress}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Next Button */}
          <TouchableOpacity 
            style={[
              globalStyles.button,
              { 
                backgroundColor: address.trim() ? colors.primary : colors.lightGray,
                marginTop: 30 
              }
            ]} 
            onPress={handleNext}
            activeOpacity={0.8}
            disabled={!address.trim()}
          >
            <Text style={[
              globalStyles.buttonText,
              { color: address.trim() ? colors.white : colors.gray }
            ]}>
              Next
            </Text>
          </TouchableOpacity>

          {/* Privacy Link */}
          <TouchableOpacity style={styles.privacyContainer}>
            <Text style={styles.privacyText}>
              <Text style={styles.privacyLink}>Learn more</Text>
              {' '}here about how we protect your privacy.
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  skipHeaderButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipHeaderText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  selectedCountryContainer: {
    marginVertical: 20,
  },
  countryFlag: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  flagText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  inputContainer: {
    marginVertical: 20,
  },
  addressInput: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.borderColor,
    minHeight: 100,
  },
  privacyContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
  },
  privacyLink: {
    color: colors.primary,
    fontWeight: '500',
  },
};

export default AddressInputScreen;
