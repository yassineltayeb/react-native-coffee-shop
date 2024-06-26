import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CartItem from "./CartItem";
import PriceFooter from "components/common/PriceFooter";
import { useDispatch } from "react-redux";

interface CartsListProps {
  items: any[];
  style?: any;
}

const CartsList: React.FC<CartsListProps> = ({ items, style }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      item.prices.forEach((price: any) => {
        totalPrice += price.count * parseFloat(price.price);
      });
    });
    return totalPrice; // Ensure the total price is formatted to two decimal places
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item, index) => item.id}
        style={styles.container}
      />
      <PriceFooter
        priceTitle="Total Price"
        price={calculateTotalPrice()}
        priceButtonLabel="Pay"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    marginVertical: 11,
  },
  priceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CartsList;
