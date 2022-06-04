import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({ complexity, affordability, duration }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 17,
  },
});

export default MealDetails;

/*
    parent view: { flexDirection: "row", justifyContent: "center" }
*/
