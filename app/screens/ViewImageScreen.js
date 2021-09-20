import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        color="white"
        size={30}
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        color="white"
        size={35}
      />
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
});

export default ViewImageScreen;
