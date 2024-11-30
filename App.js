import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import StartGameScreen from "./components/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <View style={styles.contentContainer}>
          <StartGameScreen />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
});
