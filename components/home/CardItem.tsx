import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

interface CoffeesItemProps {
  coffee: any;
}

const CardItem: React.FC<CoffeesItemProps> = ({ coffee }) => {
  const navigation = useNavigation();

  const handleCardClick = () => {
    navigation.navigate("DetailsScreen", { item: coffee });
    
  };

  return (
    <Pressable onPress={handleCardClick}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.itemContainer}
      >
        <ImageBackground
          source={coffee.imagelink_square}
          imageStyle={styles.image}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.ratingContainer}>
            <Ionicons
              name="star"
              size={FONTSIZE.size_12}
              color={COLORS.primaryOrangeHex}
            />
            <Text style={styles.rating}>{coffee.average_rating}</Text>
          </View>
        </ImageBackground>
        <View style={styles.coffeeDetailsContainer}>
          <Text style={styles.coffeeName}>{coffee.name}</Text>
          <Text style={styles.specialIngredient}>
            {coffee.special_ingredient}
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceIcon}>$</Text>
            <Text style={styles.price}>{coffee.prices[0].price}</Text>
          </View>
          <View style={styles.addButton}>
            <Ionicons
              name="add"
              size={FONTSIZE.size_18}
              color={COLORS.primaryWhiteHex}
              style={styles.addButtonIcon}
            />
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 25,
    marginRight: 22,
    height: 250,
    width: 150,
    padding: 12,
  },
  imageBackground: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 125,
    borderRadius: 25,
  },
  ratingContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 60,
    height: 25,
    position: "absolute",
    right: 0,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  rating: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_12,
    marginLeft: 5,
  },
  coffeeDetailsContainer: {
    flex: 1,
    marginTop: 12,
  },
  coffeeName: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    marginTop: 30,
  },
  specialIngredient: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    marginTop: 3,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  priceIcon: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_16,
    marginRight: 5,
  },
  price: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_18,
  },
  addButton: {
    height: 28,
    width: 28,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonIcon: {},
});

export default CardItem;
