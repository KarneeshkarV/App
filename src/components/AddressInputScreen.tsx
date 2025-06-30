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

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    // Navigate directly to LegalAddress screen
    navigation.navigate('LegalAddress', {
      selectedCountry,
    });
  };

  const handleSkip = () => {
    navigation.navigate('LegalAddress', {
      selectedCountry,
    });
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
            <TouchableOpacity
              style={styles.selectedCountryContainer}
              onPress={() => navigation.navigate('CountrySelection', { selectedCountry })}
            >
              <View style={styles.countryItem}>
                <Text style={styles.flagEmoji}>{selectedCountry.label.split(' ')[0]}</Text>
                <Text style={styles.countryText}>{selectedCountry.label.split(' ').slice(1).join(' ')}</Text>
                <Ionicons name="chevron-down" size={20} color={colors.gray} />
              </View>
            </TouchableOpacity>
          )}

          {/* Next Button */}
          <TouchableOpacity 
            style={[
              globalStyles.button,
              { 
                backgroundColor: colors.primary,
                marginTop: 30 
              }
            ]} 
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={globalStyles.buttonText}>
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
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  flagEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  countryText: {
    fontSize: 16,
    color: colors.black,
    flex: 1,
    fontWeight: '500',
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
