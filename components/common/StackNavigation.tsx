import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import DetailsScreen from "screens/DetailsScreen";
import PaymentScreen from "screens/PaymentScreen";

export type RootStackParamList = {
  TabNavigation: {};
  DetailsScreen: {};
  PaymentScreen: {
    totalPrice: string
  };
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
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
