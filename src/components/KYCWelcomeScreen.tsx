import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const KYCWelcomeScreen = ({ navigation }) => {
  const documents = [
    {
      id: 1,
      title: 'Emirates ID card',
      icon: 'card-outline',
    },
    {
      id: 2,
      title: 'Keep your Passport/Government ID Card',
      icon: 'document-text-outline',
    },
  ];

  const handleStartKYC = () => {
    navigation.navigate('CountrySelection');
  };

  const handleSkip = () => {
    // Handle skip functionality
    console.log('Skip KYC');
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
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.skipHeaderButton} onPress={handleSkip}>
            <Text style={styles.skipHeaderText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Ionicons name="shield-checkmark" size={60} color={colors.primary} />
          </View>
        </View>

        {/* Content Card */}
        <View style={globalStyles.card}>
          <Text style={globalStyles.title}>Let's Verify KYC</Text>
          <Text style={globalStyles.subtitle}>
            Keep the following documents ready
          </Text>

          {/* Document List */}
          <View style={styles.documentsContainer}>
            {documents.map((document) => (
              <View key={document.id} style={globalStyles.documentItem}>
                <View style={globalStyles.documentIcon}>
                  <Ionicons 
                    name={document.icon} 
                    size={20} 
                    color={colors.white} 
                  />
                </View>
                <Text style={globalStyles.documentText}>
                  {document.title}
                </Text>
              </View>
            ))}
          </View>

          {/* Start Button */}
          <TouchableOpacity 
            style={globalStyles.button} 
            onPress={handleStartKYC}
            activeOpacity={0.8}
          >
            <Text style={globalStyles.buttonText}>Let's Start</Text>
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
  skipHeaderButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipHeaderText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  documentsContainer: {
    marginBottom: 20,
  },
};

export default KYCWelcomeScreen;
