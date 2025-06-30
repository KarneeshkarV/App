import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { globalStyles, colors } from '../styles/globalStyles';
import GlassCard from './GlassCard';

type NavProp = StackNavigationProp<
  RootStackParamList,
  'CountrySelection'
>;

const CountrySelectionScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: '🇦🇪 United Arab Emirates', value: 'uae' },
    { label: '🇺🇸 United States', value: 'usa' },
    { label: '🇬🇧 United Kingdom', value: 'uk' },
    { label: '🇮🇳 India', value: 'india' },
    { label: '🇨🇦 Canada', value: 'canada' },
    { label: '🇦🇺 Australia', value: 'australia' },
    { label: '🇩🇪 Germany', value: 'germany' },
    { label: '🇫🇷 France', value: 'france' },
  ]);
  const navigation = useNavigation<NavProp>();

  const handleBack = () => navigation.goBack();

  const handleConfirm = () => {
    if (!value) {
      Alert.alert(
        'Please select a country',
        'You must select your country of citizenship to continue.'
      );
      return;
    }
    const label =
      items.find((it) => it.value === value)?.label || '';
    navigation.navigate('AddressInput', { country: label });
  };

  const handleSkip = () => {
    navigation.navigate('AddressInput', {
      country: '🇦🇪 United Arab Emirates',
    });
  };

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

          <Text style={styles.stepText}>Step 1/11</Text>

          <TouchableOpacity
            style={styles.skipHeaderButton}
            onPress={handleSkip}
          >
            <Text style={styles.skipHeaderText}>
              Save & Skip
            </Text>
          </TouchableOpacity>
        </View>

        {/* Glass Card */}
        <GlassCard style={{ marginTop: 40 }}>
          <Text style={globalStyles.title}>
            What's your country?
          </Text>
          <Text style={globalStyles.subtitle}>
            Select your country of citizenship
          </Text>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select your country"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownList}
            textStyle={styles.dropdownText}
            placeholderStyle={styles.placeholder}
            arrowIconStyle={styles.arrowIcon}
            tickIconStyle={styles.tickIcon}
            selectedItemContainerStyle={
              styles.selectedItem
            }
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
          />

          <TouchableOpacity
            style={[
              globalStyles.button,
              {
                backgroundColor: value
                  ? colors.primary
                  : colors.lightGray,
                marginTop: 40,
              },
            ]}
            onPress={handleConfirm}
            disabled={!value}
            activeOpacity={0.8}
          >
            <Text
              style={[
                globalStyles.buttonText,
                {
                  color: value
                    ? colors.white
                    : colors.gray,
                },
              ]}
            >
              Confirm
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.privacy}>
            <Text style={styles.privacyText}>
              <Text style={styles.privacyLink}>
                Learn more
              </Text>{' '}
              here about how we protect your privacy.
            </Text>
          </TouchableOpacity>
        </GlassCard>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  dropdown: {
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 50,
    marginTop: 20,
  },
  dropdownList: {
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 4,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.black,
  },
  placeholder: {
    fontSize: 16,
    color: colors.gray,
  },
  arrowIcon: {
    tintColor: colors.gray,
  },
  tickIcon: {
    tintColor: colors.primary,
  },
  selectedItem: {
    backgroundColor: colors.background,
  },
  privacy: {
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
});

export default CountrySelectionScreen;
