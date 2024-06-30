import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import Header from "components/common/Header";
import Title from "components/labels/Title";
import OrderHistoryMainList from "components/OrderHistoryScreen/OrderHistoryMainList";
import Button from "components/buttons/Button";

const HistoryScreen = () => {
  const orderHistory = useSelector((state: RootState) => state.history);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Header title="Order History" />
        {orderHistory.length == 0 ? (
          <View style={styles.emptyTitle}>
            <Title
              title="List is Empty"
              color={COLORS.secondaryLightGreyHex}
              fontFamily={FONTFAMILY.poppins_medium}
              fontSize={FONTSIZE.size_30}
            />
          </View>
        ) : (
          <View style={styles.orderHistoryMainContainer}>
            <OrderHistoryMainList items={orderHistory} />
            {/* <View
              style={{
                height: 100,
                backgroundColor: COLORS.primaryWhiteHex,
              }}
            > */}
            <Button
              text="Download"
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonStyle}
              onPress={() => {}}
            />
            {/* </View> */}
          </View>
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
  orderHistoryMainContainer: {
    flex: 1,
  },
  emptyTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    height: 60,
    borderRadius: 20,
  },
});

export default HistoryScreen;
