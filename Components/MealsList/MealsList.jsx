import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ displayedMeals }) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        mealId={item.id}
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
    padding: 16,
  },
});

export default MealsList;
