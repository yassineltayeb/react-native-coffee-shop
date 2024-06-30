import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Price } from "store/cart-slice";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Button from "components/buttons/Button";

interface OrderHistoryQuantitiesProps {
  prices: Price[];
}

const OrderHistoryQuantities: React.FC<OrderHistoryQuantitiesProps> = ({
  prices,
}) => {
  return (
    <View style={styles.container}>
      {prices.map((price: Price) => {
        const priceNumber = parseFloat(price.price);
        const totalAmount = price.count * priceNumber;

        return (
          <View style={styles.priceDetails}>
            <View style={styles.sizeAndPriceContainer}>
              <View style={styles.sizeContainer}>
                <Text style={styles.size}>{price.size}</Text>
              </View>
              <View style={styles.itemPriceContainer}>
                <Text style={styles.priceIcon}>$</Text>
                <Text style={styles.price}>{price.price}</Text>
              </View>
            </View>
            <View style={styles.priceDetailsContainer}>
              <Text style={styles.priceIcon}>X</Text>
              <Text style={styles.price}>{price.count}</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.itemPrise}>{totalAmount.toFixed(2)}</Text>
            </View>
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
  sizeAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  sizeContainer: {
    height: 35,
    width: 75,
    marginRight: 1,
  },
  size: {
    color: COLORS.primaryWhiteHex,
    paddingVertical: 7,
    backgroundColor: COLORS.primaryBlackHex,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: FONTSIZE.size_16,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  priceDetailsContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
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
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 30,
    height: 30,
    borderRadius: BORDERRADIUS.radius_8,
  },
  itemPriceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
    paddingVertical: 7,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    width: 75,
  },
  itemPrise: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_16,
    textAlign: "center",
  },
});

export default OrderHistoryQuantities;
