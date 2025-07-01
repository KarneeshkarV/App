import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { globalStyles, colors } from "../styles/globalStyles";
import StackedCard from "./StackedCard";

const CountrySelectionScreen = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "🇦🇪 United Arab Emirates", value: "uae" },
    { label: "🇺🇸 United States", value: "usa" },
    { label: "🇬🇧 United Kingdom", value: "uk" },
    { label: "🇮🇳 India", value: "india" },
    { label: "🇨🇦 Canada", value: "canada" },
    { label: "🇦🇺 Australia", value: "australia" },
    { label: "🇩🇪 Germany", value: "germany" },
    { label: "🇫🇷 France", value: "france" },
  ]);

  useEffect(() => {
    if (route.params?.selectedCountry) {
      setValue(route.params.selectedCountry.value);
    }
  }, [route.params?.selectedCountry]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (!value) {
      Alert.alert(
        "Please select a country",
        "You must select your country of citizenship to continue.",
      );
      return;
    }

    navigation.navigate("AddressInput", {
      selectedCountry: items.find((item) => item.value === value),
    });
  };

  const handleSkip = () => {
    navigation.navigate("AddressInput", {
      selectedCountry: { label: "🇦🇪 United Arab Emirates", value: "uae" }, // Default to UAE for demo
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
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>

          <Text style={styles.stepText}>Step 1/11</Text>

          <TouchableOpacity
            style={styles.skipHeaderButton}
            onPress={handleSkip}
          >
            <Text style={styles.skipHeaderText}>Save & Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Content Card */}
        <StackedCard>
          <Text style={globalStyles.title}>What's your country?</Text>
          <Text style={globalStyles.subtitle}>
            Select your country of citizenship
          </Text>

          {/* Dropdown */}
          <View style={styles.dropdownContainer}>
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
              placeholderStyle={styles.placeholderStyle}
              arrowIconStyle={styles.arrowIcon}
              tickIconStyle={styles.tickIcon}
              selectedItemContainerStyle={styles.selectedItemContainer}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
            />
          </View>

          {/* Confirm Button */}
          <TouchableOpacity
            style={[
              globalStyles.button,
              {
                backgroundColor: value ? colors.primary : colors.lightGray,
                marginTop: 40,
              },
            ]}
            onPress={handleConfirm}
            activeOpacity={0.8}
            disabled={!value}
          >
            <Text
              style={[
                globalStyles.buttonText,
                { color: value ? colors.white : colors.gray },
              ]}
            >
              Confirm
            </Text>
          </TouchableOpacity>

          {/* Privacy Link */}
          <TouchableOpacity style={styles.privacyContainer}>
            <Text style={styles.privacyText}>
              <Text style={styles.privacyLink}>Learn more</Text> here about how
              we protect your privacy.
            </Text>
          </TouchableOpacity>
        </StackedCard>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  skipHeaderButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipHeaderText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  dropdownContainer: {
    marginVertical: 20,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 50,
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
  placeholderStyle: {
    fontSize: 16,
    color: colors.gray,
  },
  arrowIcon: {
    tintColor: colors.gray,
  },
  tickIcon: {
    tintColor: colors.primary,
  },
  selectedItemContainer: {
    backgroundColor: colors.background,
  },
  privacyContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  privacyText: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
  },
  privacyLink: {
    color: colors.primary,
    fontWeight: "500",
  },
};

export default CountrySelectionScreen;
