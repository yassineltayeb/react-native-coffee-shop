import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import FavoriteScreen from "screens/FavoriteScreen";
import HomeScreen from "screens/HomeScreen";
import { COLORS } from "theme/these";

const Tab = createBottomTabNavigator();

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            // backgroundColor: COLORS.primaryBlackHex,
            backgroundColor: `rgba(${COLORS.primaryBlackHex}, 0.5)`,
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
              <Image
                source={require("../../assets/images/navigation/home.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../../assets/images/navigation/heart.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
