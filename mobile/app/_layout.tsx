import { store } from "@/services/redux/redux";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ header: () => <></> }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="auth/index" />
            <Stack.Screen name="home" />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
