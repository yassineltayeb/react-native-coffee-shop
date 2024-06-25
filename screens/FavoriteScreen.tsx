import FavoritesList from "components/FavoriteScreen/FavoritesList";
import Header from "components/common/Header";
import Title from "components/labels/Title";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";

interface FavoriteScreenProps {}
const FavoriteScreen: React.FC<FavoriteScreenProps> = ({}) => {
  const coffees = useSelector((stage: RootState) => stage.coffee);
  const beans = useSelector((stage: RootState) => stage.bean);
  const favorites = useSelector((stage: RootState) => stage.favorite);

  const favoriteCoffees = coffees.filter((coffee) =>
    favorites.includes(coffee.id)
  );
  const favoriteBeans = beans.filter((coffee) => favorites.includes(coffee.id));
  const combinedList = favoriteCoffees.concat(favoriteBeans);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View
        style={styles.container}
      >
        <Header title="Favorites" />
        {combinedList.length == 0 ? (
          <View style={styles.emptyTitle}>
            <Title
              title="List is Empty"
              color={COLORS.secondaryLightGreyHex}
              fontFamily={FONTFAMILY.poppins_medium}
              fontSize={FONTSIZE.size_30}
            />
          </View>
        ) : (
          <FavoritesList items={combinedList} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  emptyTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
