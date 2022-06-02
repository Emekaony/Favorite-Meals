import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";

const MealItem = ({ title, imageUrl, affordability, duration, complexity }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => {
          return pressed ? styles.buttonPressed : styles.notPressed;
        }}
        onPress={() => console.log(`Image with ${title} was pressed!`)}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: "100%",
            height: 200,
            alignSelf: "center",
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
        <View style={styles.description}>
          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{title}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>
              {duration}m {complexity.toUpperCase()}{" "}
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
  },
  buttonPressed: {
    opacity: 0.8,
    width: "90%",
  },
  notPressed: {
    width: "90%",
  },
  description: {
    alignItems: "center",
    backgroundColor: "white",

    borderRadius: 5,
  },
});

export default MealItem;
