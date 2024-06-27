import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CartItem from "./CartItem";
import PriceFooter from "components/common/PriceFooter";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

interface CartsListProps {
  items: any[];
  style?: any;
}

const CartsList: React.FC<CartsListProps> = ({ items, style }) => {
  const navigation = useNavigation();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      item.prices.forEach((price: any) => {
        totalPrice += price.count * parseFloat(price.price);
      });
    });
    return totalPrice.toFixed(2);
  };

  const payButtonHandler = () => {
    navigation.navigate("PaymentScreen", { totalPrice: calculateTotalPrice() });
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
        onPress={payButtonHandler}
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
