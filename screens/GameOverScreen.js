import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Color from "../constants/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View >
      <Text style = {styles.sumaryText}>
        Your needed <Text style = {styles.highlight} > {roundsNumber} </Text> 
        rounds to guess the number <Text style = {styles.highlight}> {userNumber} </Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sumaryText: {
    fontFamily: 'onAccessibilityAction',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  highlight: {
    fontFamily: 'adjustsFontSizeToFit',
    color: Color.primary500,
  }
});