import { StyleSheet, Text } from "react-native";
import Color from "../constant/Color";

function IntructionText({ style, children }) {
  return <Text style={[style, styles.instructionText]}>{children}</Text>;
}
export default IntructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
  },
});
