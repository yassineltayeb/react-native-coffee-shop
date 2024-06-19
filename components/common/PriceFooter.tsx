import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "components/labels/Title";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Button from "components/buttons/Button";

interface PriceFooterProps {
  priceTitle: string;
  price: number;
  priceButtonLabel: string;
  containerStyle?: any;
}

const PriceFooter: React.FC<PriceFooterProps> = ({
  priceTitle,
  price,
  priceButtonLabel,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.priceContainer}>
        <Title title="Price" color={COLORS.secondaryLightGreyHex} />
        <View style={styles.priceDetailsContainer}>
          <Text style={styles.priceIcon}>$</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <Button
        text={priceButtonLabel}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  textStyle: {},
});

export default PriceFooter;
