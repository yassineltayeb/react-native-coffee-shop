import SearchInput from "components/SearchInput";
import Header from "components/common/Header";
import Categories from "components/home/Categories";
import Title from "components/labels/Title";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { COLORS, FONTFAMILY, FONTSIZE } from "theme/these";

interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const coffees = useSelector((state: RootState) => state.coffee);
  const beans = useSelector((state: RootState) => state.bean);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filteredCoffees, setFilteredCoffees] = useState<any[]>(coffees);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    const categories = [...new Set(coffees.map((coffee) => coffee.name))];
    categories.unshift("All");
    setCategories(categories);
  };

  const getFilteredCoffees = (category: string) => {
    if (category == "All") {
      setFilteredCoffees(coffees);
      return;
    }
    const filteredCoffees = coffees.filter((coffee) => coffee.name == category);
    setFilteredCoffees(filteredCoffees);
  };

  const handelActiveCategory = (category: string) => {
    setActiveCategory(category);
    getFilteredCoffees(category);
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <ScrollView style={style.container}>
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
        <View style={style.searchInputContainer}>
          <SearchInput />
        </View>
        <Categories
          categories={categories}
          style={style.categoriesStyle}
          activeCategory={activeCategory}
          onCategoryChange={handelActiveCategory}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    justifyContent: "center",
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
  searchInputContainer: {
    flex: 1,
    marginTop: 32,
  },
  categoriesStyle: {
    marginVertical: 28,
  },
});

export default HomeScreen;
