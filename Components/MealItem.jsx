import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const MealItem = ({ title, imageUrl, affordability, duration, complexity }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => {
          return pressed ? styles.buttonPressed : styles.notPressed;
        }}
        onPress={() => {
          return navigation.navigate("Detail Screen", {
            mealName: title,
          });
        }}
      >
        <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
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
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageStyle: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default MealItem;
