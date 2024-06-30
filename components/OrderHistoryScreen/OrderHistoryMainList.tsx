import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { OrderHistoryItemModel } from "models/order-history-item";
import OrderHistory from "./OrderHistory";

interface OrderHistoryMainListProps {
  items: OrderHistoryItemModel[];
  style?: any;
}

const OrderHistoryMainList: React.FC<OrderHistoryMainListProps> = ({
  items,
  style,
}) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <OrderHistory item={item} />}
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

export default OrderHistoryMainList;
