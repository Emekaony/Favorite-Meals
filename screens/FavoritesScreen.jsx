import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import MealsList from "../Components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummydata";

// context is definitely the way to go!!
const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsExist = favoriteMealsCtx.ids.length > 0;

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (!favoriteMealsExist) {
    return (
      <View style={styles.noFav}>
        <Text style={styles.noFavText}>No favorite meals selected</Text>
      </View>
    );
  }
  return <MealsList displayedMeals={displayedMeals} />;
};

const styles = StyleSheet.create({
  noFav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

export default FavoritesScreen;
