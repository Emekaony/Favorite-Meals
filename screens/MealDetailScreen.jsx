import { useLayoutEffect, useContext } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";

import List from "../Components/MealDetail/List";
import Subtitle from "../Components/MealDetail/Subtitle";
import MealDetails from "../Components/MealDetails";
import { MEALS } from "../data/dummydata";
import { FavoritesContext } from "../store/context/favorites-context";
import { Ionicons } from "@expo/vector-icons";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealParams = {
    imageUrl: route.params.imageUrl,
    complexity: route.params.complexity,
    affordability: route.params.affordability,
    duration: route.params.duration,
    id: route.params.mealId,
    title: route.params.title,
  };

  const selectedMeal = MEALS.find((meal) => meal.id === mealParams.id);
  // console.log(selectedMeal)
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealParams.id);
  // console.log(mealIsFavorite)s

  const changeFavoriteStatusHandler = () => {
    //console.log("Pressed!");
    if (mealIsFavorite) {
      // if this meal was already part of our favorites
      // switch it back to a non fvaorite meal. Like a toggle
      favoriteMealsCtx.removeFavorite(mealParams.id);
    } else {
      // if not part of the favorite, add it to the favorite
      favoriteMealsCtx.addFavorite(mealParams.id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: "white",
      },
      headerRight: () => {
        return (
          <Ionicons
            name={mealIsFavorite ? "star" : "star-outline"}
            size={24}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealParams.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealParams.title}</Text>
      <MealDetails
        duration={mealParams.duration}
        affordability={mealParams.affordability}
        complexity={mealParams.complexity}
      />
      <View style={styles.listOuterContiner}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContiner: {
    alignItems: "center",
  },
});

export default MealDetailScreen;
