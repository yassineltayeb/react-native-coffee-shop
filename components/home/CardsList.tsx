import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CardItem from "./CardItem";

interface CoffeesListProps {
  items: any[];
  style?: any;
}

const CardsList: React.FC<CoffeesListProps> = ({ items: coffees, style }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={coffees}
      renderItem={({ item }) => <CardItem coffee={item} />}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default CardsList;
