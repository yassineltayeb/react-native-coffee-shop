import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import DetailsScreen from "screens/DetailsScreen";

export type RootStackParamList = {
  TabNavigation: {};
  DetailsScreen: {};
};

const Stack = createStackNavigator<RootStackParamList>();

interface StackNavigationProps {}
const StackNavigation: React.FC<StackNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
