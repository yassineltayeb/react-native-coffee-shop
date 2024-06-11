import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING } from "theme/these";

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/app/avatar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
