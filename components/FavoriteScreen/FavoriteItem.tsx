import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import DetailsImageBackground from "components/common/DetailsImageBackground";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "store/favorite-slice";
import FavoriteDescription from "./FavoriteDescription";

interface FavoriteItemProps {
  item: any;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigation.navigate("DetailsScreen", { item: item });
  };

  const backButtonHandler = () => {
    navigation.goBack();
  };

  const toggleIsFavorite = () => {
    dispatch(toggleFavorite(item.id));
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleCardClick}>
        <DetailsImageBackground
          imagelink_portrait={item.imagelink_portrait}
          type={item.type}
          name={item.name}
          ingredients={item.ingredients}
          special_ingredient={item.special_ingredient}
          average_rating={item.average_rating}
          ratings_count={item.ratings_count}
          roasted={item.roasted}
          isFavorite={true}
          backButtonHandler={backButtonHandler}
          toggleIsFavorite={toggleIsFavorite}
          hideBackButton={true}
        />
      </Pressable>
      <FavoriteDescription
        description={item.description}
        style={styles.description}
      />
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
});

export default FavoriteItem;
