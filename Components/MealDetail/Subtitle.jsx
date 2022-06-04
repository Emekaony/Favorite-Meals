import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ title }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#B56C3F",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#B56C3F",
    borderBottomWidth: 1,
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 6,
  },
});

export default Subtitle;
