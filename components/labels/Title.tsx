import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTFAMILY, FONTSIZE } from "theme/these";

interface TitleProps {
  title: string;
  color: string;
  fontFamily?: string;
  fontSize?: number;
  style?: any;
}

const Title: React.FC<TitleProps> = ({
  title,
  color,
  fontFamily,
  fontSize,
  style,
}) => {
  const textStyle = [
    styles.text,
    {
      color: color,
      fontFamily: fontFamily ?? FONTFAMILY.poppins_medium,
      fontSize: fontSize ?? FONTSIZE.size_14,
      lineHeight: (fontSize ?? FONTSIZE.size_14) * 1.4, // Dynamic lineHeight based on fontSize
    },
    style,
  ];

  return (
    <View style={styles.container}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    lineHeight: 30,
  },
});

export default Title;
