import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <AppText>{progress * 100}%</AppText>
        ) : (
          <LottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
