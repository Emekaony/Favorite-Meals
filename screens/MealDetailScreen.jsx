import { View, StyleSheet, Text, Image } from "react-native";

import MealDetails from "../Components/MealDetails";
import { MEALS } from "../data/dummydata";

const MealDetailScreen = ({ route }) => {
  const mealParams = {
    imageUrl: route.params.imageUrl,
    complexity: route.params.complexity,
    affordability: route.params.affordability,
    duration: route.params.duration,
    id: route.params.mealId,
  };

  const selectedMeal = MEALS.find((meal) => meal.id === mealParams.id);
  //console.log(selectedMeal);

  return (
    <View>
      <Image source={{ uri: mealParams.imageUrl }} />
      <Text>{mealParams.title}</Text>
      <MealDetails
        duration={mealParams.duration}
        affordability={mealParams.affordability}
        complexity={mealParams.complexity}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
