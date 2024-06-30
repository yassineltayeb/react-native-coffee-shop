import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Price, addToCart, removeFromCart } from "store/cart-slice";
import Title from "components/labels/Title";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Button from "components/buttons/Button";
import { useDispatch } from "react-redux";

interface CartItemQuantitiesProps {
  id: string;
  type: string;
  prices: Price[];
}

const CartItemQuantities: React.FC<CartItemQuantitiesProps> = ({
  id,
  type,
  prices,
}) => {
  const dispatch = useDispatch();

  const addHandler = (size: string, price: string, currency: string) => {
    const cartItemToAdd = {
      id: id,
      type: type,
      price: {
        size: size,
        price: price,
        currency: currency,
      },
    };

    dispatch(addToCart(cartItemToAdd));
  };
  const removeHandler = (size: string, price: string, currency: string) => {
    const cartItemToRemove = {
      id: id,
      type: type,
      price: {
        size: size,
        price: price,
        currency: currency,
      },
    };

    dispatch(removeFromCart(cartItemToRemove));
  };

  return (
    <View style={styles.container}>
      {prices.map((price: Price) => {
        return (
          <View key={price.size} style={styles.priceDetails}>
            <View style={styles.sizeContainer}>
              <Text style={styles.size}>{price.size}</Text>
            </View>
            <View style={styles.priceDetailsContainer}>
              <Text style={styles.priceIcon}>$</Text>
              <Text style={styles.price}>{price.price}</Text>
            </View>
            <Button
              text="-"
              buttonStyle={styles.buttonStyle}
              onPress={() =>
                removeHandler(price.size, price.price, price.currency)
              }
            />
            <View style={styles.countContainer}>
              <Text style={styles.count}>{price.count}</Text>
            </View>
            <Button
              text="+"
              buttonStyle={styles.buttonStyle}
              onPress={() =>
                addHandler(price.size, price.price, price.currency)
              }
            />
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
  sizeContainer: {
    height: 35,
    width: 75,
  },
  size: {
    color: COLORS.primaryWhiteHex,
    paddingVertical: 7,
    backgroundColor: COLORS.primaryBlackHex,
    overflow: "hidden",
    borderRadius: 10,
    fontSize: FONTSIZE.size_16,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
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
