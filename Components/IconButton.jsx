import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, color, size, iconName }) => {
  // use this to change the color of the star based on whether it is pressed or not
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setPressed((curr) => !curr);
        onPress();
      }}
      style={{ overflow: "hidden" }}
    >
      <Ionicons
        size={size || 24}
        name={pressed ? "md-star" : "star-outline"}
        color="white"
      />
    </Pressable>
  );
};

export default IconButton;
