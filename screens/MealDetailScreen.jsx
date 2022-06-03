import { View, StyleSheet, Text } from "react-native";

const MealDetailScreen = ({ route, navigation }) => {
  const mealName = route.params.mealName;

  return (
    <View>
      <Text>This is the meal detail screen showing - {mealName} meal</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
