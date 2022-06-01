import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

// I expect to get the title as prop
const CategoryGridTile = ({ title, color, onTapped }) => {
  //console.log(onTapped);
  return (
    <View style={[styles.gridItem]}>
      {/* for pressable component, we get a pressed value from the style prop */}
      {/* this tells us whether the component is actively pressed or not */}
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onTapped}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    backgroundColor: "white",
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "none", android: "hidden" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.4,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
