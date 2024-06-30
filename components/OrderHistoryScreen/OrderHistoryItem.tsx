import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Card from "components/common/Card";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Title from "components/labels/Title";
import { RootState } from "store/store";
import OrderHistoryQuantities from "./OrderHistoryQuantities";
import { CartItem } from "store/cart-slice";

interface OrderHistoryItemProps {
  item: CartItem;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ item }) => {
  const coffees = useSelector((state: RootState) => state.coffee);
  const beans = useSelector((state: RootState) => state.bean);

  let cartItem: any;
  if (item.type === "Bean") {
    cartItem = beans.find((bean) => bean.id == item.id);
  } else if (item.type === "Coffee") {
    cartItem = coffees.find((coffee) => coffee.id == item.id);
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    item.prices.forEach((price) => {
      totalPrice += price.count * parseFloat(price.price);
    });
    return totalPrice.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.itemDetails}>
          <View style={styles.imageContainer}>
            <Image
              source={cartItem.imagelink_square}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.descriptionContainer}>
              <Title
                title={cartItem.name}
                color={COLORS.primaryWhiteHex}
                fontFamily={FONTFAMILY.poppins_light}
                fontSize={FONTSIZE.size_16}
              />
              <Title
                title={
                  cartItem.type == "Coffee"
                    ? cartItem.roasted
                    : cartItem.special_ingredient
                }
                color={COLORS.secondaryLightGreyHex}
                fontFamily={FONTFAMILY.poppins_light}
                fontSize={FONTSIZE.size_10}
              />
            </View>
          </View>
          <View style={styles.priceDetailsContainer}>
            <Text style={styles.priceIcon}>$</Text>
            <Text style={styles.price}>{calculateTotalPrice()}</Text>
          </View>
        </View>
        <OrderHistoryQuantities
          prices={item.prices}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    overflow: "hidden",
    marginBottom: 28,
  },
  description: {
    marginVertical: 19,
  },
  card: {
    width: "100%",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  itemDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: 57,
    width: 57,
    borderRadius: BORDERRADIUS.radius_20,
    marginRight: 22,
  },
  descriptionContainer: {
    justifyContent: "center",
  },
  priceDetailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  priceIcon: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_20,
    marginRight: 5,
  },
  price: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_20,
    textAlign: "center",
  },
});

export default OrderHistoryItem;
