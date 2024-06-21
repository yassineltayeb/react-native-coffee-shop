import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "theme/these";
import Title from "components/labels/Title";

interface ButtonProps {
  text: string;
  buttonStyle?: any;
  textStyle?: any;
  onPress?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonStyle,
  textStyle,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, buttonStyle]}>
        <Title
          title={text}
          color={COLORS.primaryWhiteHex}
          fontFamily={FONTFAMILY.poppins_bold}
          fontSize={FONTSIZE.size_16}
          style={[styles.text]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  text: {
    color: COLORS.primaryWhiteHex,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
