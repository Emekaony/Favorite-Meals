import { View, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummydata";
import MealItem from "../Components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  // go thru all the meals and keep all the meals that fall into
  // a specific category
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  // continue
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        affordability={item.affordability}
        imageUrl={item.imageUrl}
        complexity={item.complexity}
        duration={item.duration}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsOverviewScreen;
