import { store } from "@/services/redux/redux";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <Stack screenOptions={{ header: () => <></> }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="auth/index" />
              <Stack.Screen name="home" />
            </Stack>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </Provider>
  );
}
