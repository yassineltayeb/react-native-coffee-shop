import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Header from "components/common/Header";
import Title from "components/labels/Title";
import CartsList from "components/CartScreen/CartsList";

const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.cart);

  cart.forEach((item) => console.log(item));

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Header title="Cart" />
        {cart.length == 0 ? (
          <View style={styles.emptyTitle}>
            <Title
              title="List is Empty"
              color={COLORS.secondaryLightGreyHex}
              fontFamily={FONTFAMILY.poppins_medium}
              fontSize={FONTSIZE.size_30}
            />
          </View>
        ) : (
          <CartsList items={cart} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  emptyTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default CartScreen;
