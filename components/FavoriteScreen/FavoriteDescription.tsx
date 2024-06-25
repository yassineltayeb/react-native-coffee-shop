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
      style={styles.linearGradient}
    >
      <View style={[styles.container, style]}>
        <Title
          title="Description"
          color={COLORS.secondaryLightGreyHex}
          style={styles.title}
          fontFamily={FONTFAMILY.poppins_medium}
          fontSize={FONTSIZE.size_16}
        />
        <View style={styles.descriptionContainer}>
          <Title
            title={description}
            color={COLORS.secondaryLightGreyHex}
            fontFamily={FONTFAMILY.poppins_regular}
            fontSize={FONTSIZE.size_12}
            style={styles.description}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 22,
  },
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    marginBottom: 15,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    alignSelf: "center", // Ensuring the description is centered
  },
});

export default FavoriteDescription;
