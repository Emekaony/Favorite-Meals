import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import IconButton from "../Components/IconButton";
import {
  LightBrown,
  DarkBrown,
  PurpleBackgroundColor,
  DarkBrown2,
} from "../constants/Colors";
import { FavoritesContextProvider } from "../store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: DarkBrown2 },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: PurpleBackgroundColor,
        },
        drawerContentStyle: {
          backgroundColor: DarkBrown,
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: DarkBrown,
        drawerActiveBackgroundColor: LightBrown,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <IconButton iconName="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            // todo: configure the IconButton so that when the user presses the drawer
            // todo: the icon gets filled up similar to how it works in the fav screen
            <IconButton iconName="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: DarkBrown },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: PurpleBackgroundColor,
            },
            headerBackTitle: "back",
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Overview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="Detail Screen"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
};

export default MainNavigation;
