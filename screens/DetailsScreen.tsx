import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "theme/these";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { toggleFavorite } from "store/favorite-slice";
import DetailsImageBackground from "components/common/DetailsImageBackground";
import DetailsDescription from "components/common/DetailsDescription";
import DetailsSizes from "components/common/DetailsSizes";
import PriceFooter from "components/common/PriceFooter";
import { addToCart } from "store/cart-slice";
import { Price } from "models/cart-item.model";

type DetailsScreenRouteParams = {
  route: {
    item: any;
  };
};

type DetailsScreenRouteProp = RouteProp<DetailsScreenRouteParams, "route">;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorite);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    route.params.item.prices[0].size
  );
  const [selectedPrice, setSelectedPrice] = useState(
    route.params.item.prices[0].price
  );
  const item = route.params.item;

  const backButtonHandler = () => {
    navigation.goBack();
  };

  const toggleIsFavorite = () => {
    dispatch(toggleFavorite(route.params.item.id));
    setIsFavorite(!isFavorite);
  };

  const getIsFavorite = () => {
    const isFavorite = favorite.includes(route.params.item.id);
    setIsFavorite(isFavorite);
  };

  const handelSizeChange = (size: string) => {
    setSelectedSize(size);
    const selectedSizeFromPrizes = item.prices?.filter(
      (price: any) => price.size === size
    );
    setSelectedPrice(selectedSizeFromPrizes[0].price);
  };

  const addToCartHandler = (id: string, size: any) => {
    const price = item.prices?.filter((price: any) => price.size === size);
    const cartItemPrice: Price = {
      size: price[0].size,
      price: price[0].price,
      currency: price[0].currency,
    };
    const cartItem = {
      id: id,
      price: cartItemPrice,
    };

    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    getIsFavorite();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <DetailsImageBackground
          imagelink_portrait={item.imagelink_portrait}
          type={item.type}
          name={item.name}
          ingredients={item.ingredients}
          special_ingredient={item.special_ingredient}
          average_rating={item.average_rating}
          ratings_count={item.ratings_count}
          roasted={item.roasted}
          isFavorite={isFavorite}
          backButtonHandler={backButtonHandler}
          toggleIsFavorite={toggleIsFavorite}
          hideBackButton={false}
        />
        <DetailsDescription
          description={item.description}
          style={styles.description}
        />
        <DetailsSizes
          prices={item.prices}
          selectedSize={selectedSize}
          style={styles.sizes}
          onPress={handelSizeChange}
        />
        <PriceFooter
          priceTitle="Price"
          price={selectedPrice}
          priceButtonLabel="Add to Cart"
          containerStyle={styles.priceContainer}
          onPress={() => {
            addToCartHandler(item.id, selectedSize);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewContainer: {
    flex: 1,
  },
  description: {
    marginTop: 19,
    marginHorizontal: 18.5,
  },
  sizes: {
    marginHorizontal: 18.5,
  },
  priceContainer: {
    marginTop: 28,
    marginHorizontal: 18.5,
  },
});
