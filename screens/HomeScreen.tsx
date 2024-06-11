import Header from "components/common/Header";
import { Colors } from "constants/colors";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <Header />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {},
});

export default HomeScreen;
