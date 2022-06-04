import { useLayoutEffect } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";

import List from "../Components/MealDetail/List";
import Subtitle from "../Components/MealDetail/Subtitle";
import MealDetails from "../Components/MealDetails";
import { MEALS } from "../data/dummydata";
import IconButton from "../Components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealParams = {
    imageUrl: route.params.imageUrl,
    complexity: route.params.complexity,
    affordability: route.params.affordability,
    duration: route.params.duration,
    id: route.params.mealId,
    title: route.params.title,
  };

  const selectedMeal = MEALS.find((meal) => meal.id === mealParams.id);
  //console.log(selectedMeal);

  const headerPressHandler = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: "white",
      },
      headerRight: () => {
        return <IconButton onPress={headerPressHandler} />;
      },
    });
  }, [navigation, headerPressHandler]);

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
