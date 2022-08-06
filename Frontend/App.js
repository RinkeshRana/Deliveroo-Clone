import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="HomeScreen"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="RestaurantScreen"
              component={RestaurantScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
              }}
              name="BasketScreen"
              component={BasketScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="DeliveryScreen"
              component={DeliveryScreen}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
