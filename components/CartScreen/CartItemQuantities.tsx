import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Price } from "store/cart-slice";
import Title from "components/labels/Title";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Button from "components/buttons/Button";

interface CartItemQuantitiesProps {
  prices: Price[];
}

const CartItemQuantities: React.FC<CartItemQuantitiesProps> = ({ prices }) => {
  return (
    <View style={styles.container}>
      {prices.map((price: Price) => {
        return (
          <View style={styles.priceDetails}>
            <Text style={styles.size}>{price.size}</Text>
            <View style={styles.priceDetailsContainer}>
              <Text style={styles.priceIcon}>$</Text>
              <Text style={styles.price}>{price.price}</Text>
            </View>
            <Button text="-" buttonStyle={styles.buttonStyle} />
            <View style={styles.countContainer}>
              <Text style={styles.count}>{price.count}</Text>
            </View>
            <Button text="+" buttonStyle={styles.buttonStyle} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  priceDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  size: {
    flexDirection: "row",
    color: COLORS.primaryWhiteHex,
    paddingHorizontal: 31,
    paddingVertical: 7,
    backgroundColor: COLORS.primaryBlackHex,
    overflow: "hidden",
    borderRadius: 10,
  },
  priceDetailsContainer: {
    flexDirection: "row",
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
    fontSize: FONTSIZE.size_16,
    textAlign: "center",
  },
  buttonStyle: {
    width: 30,
    height: 30,
    borderRadius: BORDERRADIUS.radius_8,
  },
  countContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 30,
    borderColor: COLORS.primaryOrangeHex,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_8,
  },
  count: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_16,
    textAlign: "center",
  },
});

export default CartItemQuantities;
