import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../assets/welcome-bg.jpg")}
        style={{ position: "relative", resizeMode: "cover" }}
      />

      <View style={{ position: "absolute", bottom: 64 }}>
        <Text style={{ color: "#EDEADE", fontSize: 20, fontWeight: "bold" }}>
          Language Learning App
        </Text>
        <Text
          style={{
            color: "#EDEADE",
            fontSize: 48,
            fontWeight: "bold",
            marginVertical: 32,
          }}
        >
          Language Learning App
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#EDEADE",
            borderRadius: 18,
            paddingVertical: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B1212", fontSize: 24, fontWeight: "bold" }}>
            Let's Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
