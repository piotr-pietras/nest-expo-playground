import { appSlice } from "@/services/redux/app.slice";
import { useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

const { appInit$ } = appSlice.actions;

export default function WelcomeScreen() {
  const dispatch = useDispatch();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // Fixes error "Attempted to navigate before mounting the Root Layout component."
    if (!navigationState.key) return;
    dispatch(appInit$());
  }, [navigationState.key]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text variant="headlineMedium" style={styles.title}>
          Nest Expo Playground
        </Text>
        <ActivityIndicator animating={true} size={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: "80%",
    gap: 20,
  },
  title: {
    textAlign: "center",
  },
});
