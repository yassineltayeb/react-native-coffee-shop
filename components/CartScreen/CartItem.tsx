import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "components/common/Card";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Title from "components/labels/Title";
import { RootState } from "store/store";
import CartItemQuantities from "./CartItemQuantities";

interface CartItemProps {
  item: any;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const coffees = useSelector((state: RootState) => state.coffee);
  const beans = useSelector((state: RootState) => state.bean);
  const dispatch = useDispatch();

  let cartItem: any;
  if (item.type === "Bean") {
    cartItem = beans.find((bean) => bean.id == item.id);
  } else if (item.type === "Coffee") {
    cartItem = coffees.find((coffee) => coffee.id == item.id);
  }

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
          </View>
          <View style={styles.descriptionContainer}>
            <Title
              title={cartItem.name}
              color={COLORS.primaryWhiteHex}
              fontFamily={FONTFAMILY.poppins_light}
              fontSize={FONTSIZE.size_16}
            />
            <Title
              title={cartItem.name}
              color={COLORS.secondaryLightGreyHex}
              fontFamily={FONTFAMILY.poppins_light}
              fontSize={FONTSIZE.size_10}
            />
            <View style={styles.roastContainer}>
              <View style={styles.roast}>
                <Title
                  title={cartItem.roasted}
                  color={COLORS.secondaryLightGreyHex}
                  fontSize={FONTSIZE.size_10}
                  fontFamily={FONTFAMILY.poppins_regular}
                />
              </View>
            </View>
          </View>
        </View>
        <CartItemQuantities
          id={cartItem.id}
          type={cartItem.type}
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
    alignItems: "center",
  },
  imageContainer: {},
  image: {
    height: 108,
    width: 108,
    borderRadius: BORDERRADIUS.radius_20,
    marginRight: 22,
  },
  descriptionContainer: {
    justifyContent: "center",
  },
  roastContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
  },
  roast: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    height: 44,
    width: 131,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_15,
  },
});

export default CartItem;
