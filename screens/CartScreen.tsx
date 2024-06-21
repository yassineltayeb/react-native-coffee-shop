import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.cart);

  cart.forEach(item => console.log(item))

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
