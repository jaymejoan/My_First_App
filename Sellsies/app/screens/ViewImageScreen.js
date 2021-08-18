import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chair.jpg")}
    >
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "contain",
    },
    closeButton: {
        width: 100,
        height: 100,
        backgroundColor: "#fc5c65",
    },
    closeButton: {
        width: 100,
        height: 100,
        backgroundColor: "#4ECDC4",
    }
});

export default ViewImageScreen;
