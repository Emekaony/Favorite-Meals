import { View, StyleSheet, Text } from "react-native";

import { MEALS } from "../data/dummydata";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  // go thru all the meals and keep all the meals that fall into
  // a specific category
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <Text>This is the meal overview screen - {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsOverviewScreen;
