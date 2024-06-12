import Header from "components/common/Header";
import Title from "components/labels/Title";
import { Colors } from "constants/colors";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";

interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.container}>
        <Header />
        <View style={style.titleContainer}>
          <Title
            title="Find the best"
            fontFamily={FONTFAMILY.poppins_semibold}
            fontSize={30}
            color={COLORS.primaryWhiteHex}
            style={style.title}
          />
          <Title
            title="coffee for you"
            fontFamily={FONTFAMILY.poppins_semibold}
            fontSize={30}
            color={COLORS.primaryWhiteHex}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    marginTop: 31,
  },
});

export default HomeScreen;
