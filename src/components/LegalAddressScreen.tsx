import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';
import GlassCard from './GlassCard';

const LegalAddressScreen = ({ navigation, route }) => {
  const { selectedCountry } = route.params || {};
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country:
      selectedCountry?.label?.replace('🇦🇪 ', '') ||
      'United Arab Emirates',
  });

  const handleBack = () => navigation.goBack();

  const handleNext = () => {
    const required = ['street', 'city', 'state', 'zipCode'];
    const missing = required.filter(
      (f) => !addressData[f].trim()
    );
    if (missing.length > 0) {
      Alert.alert(
        'Please fill all required fields',
        'All address fields are required to continue.'
      );
      return;
    }
    Alert.alert('Legal Address Saved', '', [
      {
        text: 'Continue',
        onPress: () =>
          console.log('Address data:', addressData),
      },
    ]);
  };

  const handleSkip = () => {
    console.log('Skip legal address');
  };

  const updateField = (field: string, val: string) => {
    setAddressData((prev) => ({ ...prev, [field]: val }));
  };

  const isFormValid = () =>
    addressData.street.trim() &&
    addressData.city.trim() &&
    addressData.state.trim() &&
    addressData.zipCode.trim();

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
      />

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
            <Ionicons
              name="arrow-back"
              size={24}
              color={colors.white}
            />
          </TouchableOpacity>

          <Text style={styles.stepText}>Step 2/11</Text>

          <TouchableOpacity
            style={styles.skipHeaderButton}
            onPress={handleSkip}
          >
            <Text style={styles.skipHeaderText}>
              Save & Skip
            </Text>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Glass Card */}
            <GlassCard style={{ marginTop: 40, flex: 1 }}>
              <Text style={globalStyles.title}>
                What's your legal address?
              </Text>
              <Text style={globalStyles.subtitle}>
                Type your address
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Address (Area and Street)"
                  placeholderTextColor={colors.gray}
                  value={addressData.street}
                  onChangeText={(v) => updateField('street', v)}
                  multiline
                  numberOfLines={2}
                />

                <TextInput
                  style={styles.input}
                  placeholder="City/ District/ Town"
                  placeholderTextColor={colors.gray}
                  value={addressData.city}
                  onChangeText={(v) => updateField('city', v)}
                />

                <TextInput
                  style={styles.input}
                  placeholder="State"
                  placeholderTextColor={colors.gray}
                  value={addressData.state}
                  onChangeText={(v) => updateField('state', v)}
                />

                <View style={styles.zipCodeContainer}>
                  <Text style={styles.zipCodeLabel}>
                    Zip Code
                  </Text>
                  <TextInput
                    style={[styles.input, { marginTop: 8 }]}
                    placeholder="Enter your zipcode"
                    placeholderTextColor={colors.gray}
                    value={addressData.zipCode}
                    onChangeText={(v) =>
                      updateField('zipCode', v)
                    }
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.countryContainer}>
                  <Text style={styles.countryLabel}>
                    Country
                  </Text>
                  <TextInput
                    style={[styles.input, { marginTop: 8 }]}
                    placeholder="Enter your country"
                    placeholderTextColor={colors.gray}
                    value={addressData.country}
                    onChangeText={(v) =>
                      updateField('country', v)
                    }
                  />
                </View>
              </View>

              <TouchableOpacity
                style={[
                  globalStyles.button,
                  {
                    backgroundColor: isFormValid()
                      ? colors.primary
                      : colors.lightGray,
                    marginTop: 20,
                  },
                ]}
                onPress={handleNext}
                disabled={!isFormValid()}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    globalStyles.buttonText,
                    {
                      color: isFormValid()
                        ? colors.white
                        : colors.gray,
                    },
                  ]}
                >
                  Next
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.privacyContainer}
              >
                <Text style={styles.privacyText}>
                  <Text style={styles.privacyLink}>
                    Learn more
                  </Text>{' '}
                  here about how we protect your privacy.
                </Text>
              </TouchableOpacity>
            </GlassCard>
          </ScrollView>
        </KeyboardAvoidingView>
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
    backgroundColor: 'rgba(255,255,255,0.2)',
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
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginBottom: 16,
    minHeight: 50,
  },
  zipCodeContainer: {
    marginBottom: 16,
  },
  zipCodeLabel: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 8,
  },
  countryContainer: {
    marginBottom: 16,
  },
  countryLabel: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 8,
  },
  privacyContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
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

export default LegalAddressScreen;
