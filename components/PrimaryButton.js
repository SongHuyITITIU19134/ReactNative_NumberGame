import { Pressable, StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";

function PrimaryButton({ children, onPress }) {
  function PressHandler() {
    onPress();
  }
  return (
    <View style={style.buttonOutContain}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContain, style.press]
            : style.buttonInnerContain
        }
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const style = StyleSheet.create({
  buttonOutContain: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContain: {
    backgroundColor: Color.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  press: {
    opacity: 0.75,
  },
});
