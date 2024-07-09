import { store } from "@/services/redux/redux";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack screenOptions={{ header: () => <></> }}>
          <Stack.Screen name="index" />
        </Stack>
      </PaperProvider>
    </Provider>
  );
}
