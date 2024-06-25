import { StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "theme/these";
import { LinearGradient } from "expo-linear-gradient";

interface CardProps {
  children?: React.ReactNode;
  style?: any;
}
const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={[styles.linearGradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default Card;
