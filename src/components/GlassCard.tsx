import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  Platform,
  ViewProps,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/globalStyles';

interface GlassCardProps extends ViewProps {
  style?: ViewStyle;
}

const GlassCard: React.FC<GlassCardProps> = ({ style, children, ...props }) => (
  <BlurView
    intensity={80}
    tint="light"
    style={[styles.blurContainer, style]}
    {...props}
  >
    <LinearGradient
      colors={['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)']}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  </BlurView>
);

const styles = StyleSheet.create({
  blurContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',

    // shadow for iOS
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  gradient: {
    flex: 1,
    padding: 24,
  },
});

export default GlassCard;
