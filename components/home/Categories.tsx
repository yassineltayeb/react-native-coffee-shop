import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY } from "theme/these";

interface CategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: any;
  style?: any;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  style,
}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({ item }) => (
        <Pressable onPress={() => onCategoryChange(item)}>
          <View
            style={[
              styles.itemContainer,
              style,
              item === activeCategory && styles.activeItemContainer,
            ]}
          >
            <Text
              style={[
                styles.itemText,
                item === activeCategory && styles.activeItemText,
              ]}
            >
              {item}
            </Text>
          </View>
        </Pressable>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: 5,
  },
  activeItemContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
  },
  itemText: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 14,
  },
  activeItemText: {
    color: COLORS.primaryBlackHex,
  },
});

export default Categories;
