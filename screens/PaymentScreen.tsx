import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BORDERRADIUS, COLORS, FONTSIZE } from "theme/these";
import DetailsScreenHeader from "components/DetailsScreen/DetailsScreenHeader";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Card from "components/common/Card";
import Title from "components/labels/Title";
import CustomIcon from "components/common/CustomIcon";
import PaymentMethod from "components/PaymentCart/PaymentMethod";
import PriceFooter from "components/common/PriceFooter";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "components/common/StackNavigation";
import { OrderHistoryItemModel } from "models/order-history-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { addToHistory } from "store/order-history-slice";
import moment from "moment";

type PaymentScreenRouteProp = RouteProp<RootStackParamList, "PaymentScreen">;
type PaymentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PaymentScreen"
>;

type PaymentScreenProps = {
  route: PaymentScreenRouteProp;
  navigation: PaymentScreenNavigationProp;
};

const PaymentScreen: React.FC<PaymentScreenProps> = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute<PaymentScreenRouteProp>();
  const { totalPrice } = route.params;

  const backButtonHandler = () => {
    navigation.goBack();
  };

  const handelPay = () => {
    const orderItem: OrderHistoryItemModel = {
      id: generateRandomId(4),
      orderDate: moment(new Date()).format("Do MMMM HH:mm"),
      totalAmount: totalPrice,
      items: cartItems,
    };

    dispatch(addToHistory(orderItem));
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <DetailsScreenHeader
          title="Payment"
          isFavorite={false}
          onPressLeft={backButtonHandler}
          onPressRight={() => {}}
          hideBackButton={false}
          hideFavoriteButton={true}
        />
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Title
              title="Credit Card"
              color={COLORS.primaryWhiteHex}
              fontSize={FONTSIZE.size_14}
              style={styles.title}
            />
            {/* Card */}
            <Card style={styles.card}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <CustomIcon
                  name="chip"
                  color={COLORS.primaryOrangeHex}
                  size={30}
                />
                <CustomIcon
                  name="visa"
                  color={COLORS.primaryWhiteHex}
                  size={45}
                />
              </View>
              {/* Card Content */}
              <View style={styles.cardContent}>
                <Title
                  title="3 8 9 7   8 9 2 3    6 7 4 5    4 6 3 8"
                  color={COLORS.primaryWhiteHex}
                  fontSize={FONTSIZE.size_16}
                />
              </View>
              {/* Card Footer */}
              <View style={styles.cardFooter}>
                <View style={styles.cardFooterItem}>
                  <Title
                    title="Card Holder Name"
                    color={COLORS.primaryLightGreyHex}
                    fontSize={FONTSIZE.size_10}
                  />
                  <Title
                    title="Robert Evans"
                    color={COLORS.primaryWhiteHex}
                    fontSize={FONTSIZE.size_16}
                  />
                </View>
                <View style={styles.cardFooterItem}>
                  <Title
                    title="Expiry Date"
                    color={COLORS.primaryLightGreyHex}
                    fontSize={FONTSIZE.size_10}
                  />
                  <Title
                    title="02/30"
                    color={COLORS.primaryWhiteHex}
                    fontSize={FONTSIZE.size_16}
                  />
                </View>
              </View>
            </Card>
          </View>
          <View style={styles.paymentMethods}>
            <PaymentMethod iconName="wallet" title="Wallet" amount="$ 100.50" />
            <PaymentMethod
              image={require("../assets/images/app/gpay.png")}
              title="Google Play"
            />
            <PaymentMethod
              image={require("../assets/images/app/applepay.png")}
              title="Apple Play"
            />
            <PaymentMethod
              image={require("../assets/images/app/amazonpay.png")}
              title="Amazon Play"
            />
          </View>
        </View>
      </ScrollView>
      <PriceFooter
        priceTitle="Total Price"
        price={totalPrice}
        priceButtonLabel="Pay from Credit Card"
        containerStyle={styles.footer}
        onPress={handelPay}
      />
    </SafeAreaView>
  );
};

const generateRandomId = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default PaymentScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewContainer: {
    flex: 1,
    marginHorizontal: 18.5,
  },
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 23,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  title: {
    marginBottom: 10,
  },
  card: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: BORDERRADIUS.radius_15,
    height: 186,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    justifyContent: "center",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFooterItem: {
    justifyContent: "center",
  },
  paymentMethods: {
    flex: 1,
  },
  footer: {
    marginHorizontal: 18.5,
  },
});
