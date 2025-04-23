import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.customText}>Imagem do maior time do mundo:</Text>

        <Image
          source={require("./assets/arsenal-football-club-4096.png")}
          style={styles.image}
        />

        <StatusBar
          style="light"
          backgroundColor="#517bb9"
          translucent={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbdefb",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  customText: {
    fontSize: 24,
    color: "#0067b1",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
