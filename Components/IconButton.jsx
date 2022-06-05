import { useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, color, size, iconName }) => {
  // use this to change the color of the star based on whether it is pressed or not
  const [pressed, setPressed] = useState(false);

  // if pressed, handle whether an Icon Name was given
  const pressedObj = {
    name: iconName ? iconName : "star",
  };

  // if not pressed, still handle whether an Icon Name was given
  const notPressedObj = {
    name: iconName ? `${iconName}-outline` : "star-outline",
  };

  const handleOnPress = () => {
    if (onPress) {
      return onPress;
    } else {
      return "";
    }
  };

  return (
    <Pressable
      onPress={() => {
        setPressed((curr) => !curr);
        handleOnPress();
      }}
      style={{ overflow: "hidden" }}
    >
      <Ionicons
        size={size || 24}
        name={pressed ? pressedObj.name : notPressedObj.name}
        color={color || "white"}
      />
    </Pressable>
  );
};

export default IconButton;
