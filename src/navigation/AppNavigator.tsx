import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ForecastScreen from "../screens/ForecastScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />

                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                />

                <Stack.Screen
                    name="Forecast"
                    component={ForecastScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}