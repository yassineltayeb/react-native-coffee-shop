import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "components/common/Card";
import CustomIcon from "components/common/CustomIcon";
import Title from "components/labels/Title";
import { BORDERRADIUS, COLORS } from "theme/these";

interface PaymentMethodProps {
  iconName?: string;
  image?: any;
  title: string;
  amount?: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  iconName,
  image,
  title,
  amount,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardDetails}>
        {iconName && (
          <CustomIcon
            name={iconName ?? ""}
            color={COLORS.primaryOrangeHex}
            size={24}
            style={styles.iconImage}
          />
        )}
        {image && (
          <Image source={image} style={[styles.iconImage, styles.image]} />
        )}
        <Title title={title} color={COLORS.primaryWhiteHex} />
      </View>
      {amount && <Title title={amount ?? ""} color={COLORS.primaryWhiteHex} />}
    </Card>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconImage: {
    marginRight: 14,
  },
  image: {
    width: 20.83,
    height: 25,
  },
});
