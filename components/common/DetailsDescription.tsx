import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "components/labels/Title";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";

interface DetailsDescriptionProps {
  description: string;
  style: any;
}
const DetailsDescription: React.FC<DetailsDescriptionProps> = ({
  description,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Title
        title="Description"
        color={COLORS.secondaryLightGreyHex}
        style={styles.title}
        fontFamily={FONTFAMILY.poppins_medium}
        fontSize={FONTSIZE.size_16}
      />
      <Title
        title={description}
        color={COLORS.secondaryLightGreyHex}
        fontFamily={FONTFAMILY.poppins_regular}
        fontSize={FONTSIZE.size_12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 15,
  },
});

export default DetailsDescription;
