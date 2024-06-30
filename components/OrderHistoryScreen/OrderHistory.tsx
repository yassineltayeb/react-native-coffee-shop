import { StyleSheet, View } from "react-native";
import React from "react";
import { OrderHistoryItemModel } from "models/order-history-item";
import Title from "components/labels/Title";
import { COLORS } from "theme/these";
import OrderHistoryList from "./OrderHistoryList";

interface OrderHistoryProps {
  item: OrderHistoryItemModel;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.orderItem}>
        <View style={styles.orderItemMainDetails}>
          <View>
            <Title title="Order Date" color={COLORS.primaryWhiteHex} />
            <Title title={item.orderDate} color={COLORS.primaryWhiteHex} />
          </View>
          <View>
            <Title title="Total Amount" color={COLORS.primaryWhiteHex} />
            <Title
              title={"$ " + item.totalAmount}
              color={COLORS.primaryOrangeHex}
              style={{ textAlign: "right" }}
            />
          </View>
        </View>
        <OrderHistoryList items={item.items} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 28,
  },
  orderItem: {
    flex: 1,
    width: "100%",
  },
  orderItemMainDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default OrderHistory;
