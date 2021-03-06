import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colours from "../config/colours";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.black,
    flex: 1,
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: colours.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: colours.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
