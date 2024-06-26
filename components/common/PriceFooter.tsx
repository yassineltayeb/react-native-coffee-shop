import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "components/labels/Title";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Button from "components/buttons/Button";

interface PriceFooterProps {
  priceTitle: string;
  price: string;
  priceButtonLabel: string;
  containerStyle?: any;
  onPress?: any;
}

const PriceFooter: React.FC<PriceFooterProps> = ({
  priceTitle,
  price,
  priceButtonLabel,
  containerStyle,
  onPress,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.priceContainer}>
        <Title title={priceTitle} color={COLORS.secondaryLightGreyHex} />
        <View style={styles.priceDetailsContainer}>
          <Text style={styles.priceIcon}>$</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <Button
        text={priceButtonLabel}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonStyle}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  priceDetailsContainer: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  priceIcon: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_16,
    marginRight: 5,
  },
  price: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_18,
  },
  buttonStyle: {
    width: 240,
    height: 60,
    borderRadius: 20,
  },
  textStyle: {},
});

export default PriceFooter;
