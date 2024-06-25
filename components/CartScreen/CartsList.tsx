import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CartItem from "./CartItem";

interface CartsListProps {
  items: any[];
  style?: any;
}

const CartsList: React.FC<CartsListProps> = ({
  items: coffees,
  style,
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={coffees}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={(item, index) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 11,
  },
});

export default CartsList;
