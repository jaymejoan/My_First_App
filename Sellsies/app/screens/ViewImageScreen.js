import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chair.jpg")}
      resizeMode="contain"
    >
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 20,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
    top: 40,
    left: 355,
  },
});

export default ViewImageScreen;
