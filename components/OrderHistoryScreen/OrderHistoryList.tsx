import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { CartItem } from "store/cart-slice";
import OrderHistoryItem from "./OrderHistoryItem";
import Button from "components/buttons/Button";

interface OrderHistoryListProps {
  items: CartItem[];
  style?: any;
}

const OrderHistoryList: React.FC<OrderHistoryListProps> = ({
  items,
  style,
}) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <OrderHistoryItem item={item} />}
        keyExtractor={(item, index) => item.id}
        style={styles.container}
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

export default OrderHistoryList;
