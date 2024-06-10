import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "constants/colors";
import { Image } from "react-native";
import FavoriteScreen from "screens/FavoriteScreen";
import HomeScreen from "screens/HomeScreen";

const Tab = createBottomTabNavigator();

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: Colors.black },
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.secondary, 
          tabBarInactiveTintColor: Colors.primary,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/images/navigation/home.png")}
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
                source={require("../assets/images/navigation/heart.png")}
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
