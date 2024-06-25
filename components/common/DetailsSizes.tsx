import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Title from "components/labels/Title";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "theme/these";

interface DetailsSizesProps {
  prices: any[];
  selectedSize: string;
  style: any;
  onPress: any;
}

const DetailsSizes: React.FC<DetailsSizesProps> = ({
  prices,
  selectedSize,
  style,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Title
        title="Size"
        color={COLORS.secondaryLightGreyHex}
        style={styles.title}
        fontFamily={FONTFAMILY.poppins_medium}
        fontSize={FONTSIZE.size_16}
      />
      <View style={styles.sizeContainer}>
        {prices &&
          prices.map((price: any) => {
            return (
              <Pressable key={price.size} onPress={() => onPress(price.size)}>
                <View
                  style={[
                    styles.size,
                    price.size == selectedSize && styles.sizeActive,
                  ]}
                >
                  <Title
                    title={price.size}
                    color={
                      price.size == selectedSize
                        ? COLORS.primaryOrangeHex
                        : COLORS.secondaryLightGreyHex
                    }
                    style={styles.title}
                    fontFamily={FONTFAMILY.poppins_medium}
                    fontSize={FONTSIZE.size_12}
                  />
                </View>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 8,
  },
  sizeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
  },
  size: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    width: 100,
    height: 40,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeActive: {
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
  },
});

export default DetailsSizes;
