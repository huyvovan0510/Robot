import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"#fff"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
