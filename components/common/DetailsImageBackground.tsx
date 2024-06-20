import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailsScreenHeader from "components/DetailsScreen/DetailsScreenHeader";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "theme/these";
import Title from "components/labels/Title";
import CustomIcon from "./CustomIcon";

interface DetailsImageBackgroundProps {
  imagelink_portrait: any;
  type: string;
  name: string;
  ingredients: string;
  special_ingredient: string;
  average_rating: string;
  ratings_count: string;
  roasted: string;
  isFavorite: any;
  backButtonHandler: any;
  toggleIsFavorite: any;
  hideBackButton: boolean;
  style?: any;
}

const DetailsImageBackground: React.FC<DetailsImageBackgroundProps> = ({
  imagelink_portrait,
  type,
  name,
  ingredients,
  special_ingredient,
  average_rating,
  ratings_count,
  roasted,
  isFavorite,
  backButtonHandler,
  toggleIsFavorite,
  hideBackButton,
  style,
}) => {
  return (
    <ImageBackground
      source={imagelink_portrait}
      style={[styles.imageBackground, style]}
      resizeMode="cover"
    >
      <View style={styles.imageBackgroundContent}>
        <DetailsScreenHeader
          isFavorite={isFavorite}
          onPressLeft={backButtonHandler}
          onPressRight={toggleIsFavorite}
          hideBackButton={hideBackButton}
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.firstRowContainer}>
          <View style={styles.names}>
            <Title
              title={name}
              color={COLORS.primaryWhiteHex}
              fontFamily={FONTFAMILY.poppins_semibold}
              fontSize={FONTSIZE.size_20}
            />
            <Title
              title={
                type === "Bean" ? `From ${ingredients}` : special_ingredient
              }
              color={COLORS.primaryWhiteHex}
              fontFamily={FONTFAMILY.poppins_medium}
              fontSize={FONTSIZE.size_12}
            />
          </View>
          <View style={styles.typeContainer}>
            <View style={styles.type}>
              <CustomIcon
                name={type === "Bean" ? "bean" : "beans"}
                size={26}
                color={COLORS.primaryOrangeHex}
              />
              <Title
                title={type}
                color={COLORS.secondaryLightGreyHex}
                fontSize={FONTSIZE.size_10}
                fontFamily={FONTFAMILY.poppins_regular}
                style={styles.typeLabel}
              />
            </View>
            <View style={styles.type}>
              <CustomIcon
                name={type === "Bean" ? "location" : "drop"}
                size={26}
                color={COLORS.primaryOrangeHex}
              />
              <Title
                title={ingredients}
                color={COLORS.secondaryLightGreyHex}
                fontSize={FONTSIZE.size_10}
                fontFamily={FONTFAMILY.poppins_regular}
                style={styles.typeLabel}
              />
            </View>
          </View>
        </View>
        <View style={styles.secondRowContainer}>
          <View style={styles.ratingContainer}>
            <CustomIcon name="star" size={22} color={COLORS.primaryOrangeHex} />
            <Title
              title={average_rating}
              color={COLORS.primaryWhiteHex}
              fontFamily={FONTFAMILY.poppins_medium}
              fontSize={FONTSIZE.size_16}
              style={styles.ratingLabel}
            />
            <Title
              title={`(${ratings_count})`}
              color={COLORS.secondaryLightGreyHex}
              fontFamily={FONTFAMILY.poppins_medium}
              fontSize={FONTSIZE.size_10}
              style={styles.ratingLabel}
            />
          </View>
          <View style={styles.roastContainer}>
            <View style={styles.roast}>
              <Title
                title={roasted}
                color={COLORS.secondaryLightGreyHex}
                fontSize={FONTSIZE.size_10}
                fontFamily={FONTFAMILY.poppins_regular}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 520,
    width: "100%",
    aspectRatio: 20 / 25,
  },
  imageBackgroundContent: {
    flex: 1,
    marginHorizontal: 30,
    
  },
  detailsContainer: {
    height: 148,
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  firstRowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  names: {
    flex: 1,
    justifyContent: "center",
  },
  typeContainer: {
    flexDirection: "row",
  },
  type: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_10,
    marginLeft: 20,
  },
  typeLabel: {
    marginTop: 2,
  },
  secondRowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: {
    marginTop: 3,
    marginLeft: 5,
  },
  roastContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  roast: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    height: 44,
    width: 131,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_10,
  },
});
export default DetailsImageBackground;
