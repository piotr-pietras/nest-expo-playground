import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="add" />
        <Stack.Screen name="config/index" />
      </Stack>
    </SafeAreaView>
  );
}
