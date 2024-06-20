import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "components/labels/Title";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import { LinearGradient } from "expo-linear-gradient";

interface FavoriteDescriptionProps {
  description: string;
  style: any;
}
const FavoriteDescription: React.FC<FavoriteDescriptionProps> = ({
  description,
  style,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <View style={[styles.container, style]}>
        <Title
          title="Description"
          color={COLORS.secondaryLightGreyHex}
          style={styles.title}
          fontFamily={FONTFAMILY.poppins_medium}
          fontSize={FONTSIZE.size_16}
        />
        <Title
          title={description}
          color={COLORS.secondaryLightGreyHex}
          fontFamily={FONTFAMILY.poppins_regular}
          fontSize={FONTSIZE.size_12}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    marginBottom: 15,
  },
});

export default FavoriteDescription;
