import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { colors } from "../styles/globalStyles";

/**
 * A three-layer “bottom-sheet” that mimics stacked cards.
 * Simply wrap your screen’s previous <card> contents with <StackedCard>.
 */
const StackedCard: React.FC<{
  style?: StyleProp<ViewStyle>;
  topOffset?: number;
}> = ({ children, style, topOffset = 200 }) => {
  return (
    <View
      style={[styles.container, { top: topOffset }]}
      pointerEvents="box-none"
    >
      {/*   Far-back layer   */}
      <View style={styles.layerTwo} />
      {/*   Mid layer        */}
      <View style={styles.layerOne} />
      {/*   Front/content    */}
      <View style={[styles.topLayer, style]}>{children}</View>
    </View>
  );
};

export default StackedCard;

const SHEET_RADIUS = 28;

const sheetShadow = {
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 6,
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // Force everything to the centre so we get the nice rounded top corners
    alignItems: "center",
    display: "flex", // Use flexbox for layout
  },
  layerTwo: {
    position: "absolute",
    bottom: 24,
    width: "90%",
    height: "60%",
    borderRadius: SHEET_RADIUS,
    backgroundColor: colors.cardBackground,
    ...sheetShadow,
  },
  layerOne: {
    position: "absolute",
    bottom: 12,
    width: "94%",
    height: "97%",
    borderRadius: SHEET_RADIUS,
    backgroundColor: colors.cardBackground,
    ...sheetShadow,
  },
  topLayer: {
    width: "96%",
    height: "100%",
    borderRadius: SHEET_RADIUS,
    backgroundColor: colors.cardBackground,
    padding: 24,
    ...sheetShadow,
  },
});
