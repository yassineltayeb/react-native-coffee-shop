import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import CartScreen from "screens/CartScreen";
import FavoriteScreen from "screens/FavoriteScreen";
import HomeScreen from "screens/HomeScreen";
import { COLORS } from "theme/these";
import CustomIcon from "./CustomIcon";

const Tab = createBottomTabNavigator();

interface abNavigationProps {}
const TabNavigation: React.FC<abNavigationProps> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primaryBlackHex,
          // backgroundColor: `rgba(${COLORS.primaryBlackHex}, 0.5)`,
          borderTopWidth: 0,
          // position:"absolute"
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primaryRedHex,
        tabBarInactiveTintColor: COLORS.primaryOrangeHex,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="like" color={color} size={size}/>

          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
