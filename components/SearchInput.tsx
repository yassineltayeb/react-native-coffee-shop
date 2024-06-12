import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY } from "theme/these";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchInputProps {
  style?: any;
}

const SearchInput: React.FC<SearchInputProps> = (style) => {
  return (
    <View style={[styles.container]}>
      <Ionicons
        style={styles.icon}
        name="search"
        size={23}
        color={COLORS.primaryLightGreyHex}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Find Your Coffee..."
        placeholderTextColor={COLORS.primaryLightGreyHex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.primaryDarkGreyHex,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  textInput: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 15,
    marginTop: 3,
  },
});

export default SearchInput;
