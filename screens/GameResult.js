import { Text, View, Image } from "react-native";

function GameResult() {
  return(

  <View>
    <Text>Game is Over !!</Text>
    <Image source={require('./images/youwon.jpg')}/>
  </View>
  )
}

export default GameResult;
