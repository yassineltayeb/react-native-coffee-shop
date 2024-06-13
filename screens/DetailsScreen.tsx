import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";

type DetailsScreenRouteParams = {
  route: {
    item: any;
  };
};

type DetailsScreenRouteProp = RouteProp<
  DetailsScreenRouteParams,
  "route"
>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();

  console.log(route);

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
