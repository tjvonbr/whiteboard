import * as React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

const FullPageLoading = ({ color, size }: ActivityIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FullPageLoading;
