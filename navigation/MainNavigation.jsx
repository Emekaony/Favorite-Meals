import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3B2C0F" },
          headerTintColor: "white",
          // contentStyle is used to style the background of the main screen
          contentStyle: {
            backgroundColor: "#5F277F",
          },
          headerBackTitle: "back",
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: "All Meals",
          }}
        />
        <Stack.Screen name="Overview" component={MealsOverviewScreen} />
        <Stack.Screen name="Detail Screen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
