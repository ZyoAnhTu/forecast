import { Text, View, Image, StyleSheet ,useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import Color from "../constants/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  const {width, height} = useWindowDimensions()
  let imageSize = 300

  if (width < 380) {
    imageSize = 150
  }

  if(height < 400) {
    imageSize = 80
  }

  const styleImageOver = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/ 2
  }
  return (
    <ScrollView style = {styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, styleImageOver]}>
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
      </ScrollView>
  );
}

export default GameOverScreen;
// const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
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
