import { FlatList, StyleSheet } from "react-native";
import React from "react";
import FavoriteItem from "./FavoriteItem";

interface FavoritesListProps {
  items: any[];
  style?: any;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  items: coffees,
  style,
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={coffees}
      renderItem={({ item }) => <FavoriteItem item={item} />}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default FavoritesList;
