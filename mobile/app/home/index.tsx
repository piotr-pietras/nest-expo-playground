import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, router } from "expo-router";
import { View } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";

export default function HomeScreen() {
  const toSettings = () => {
    router.navigate("/home/config");
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerBackVisible: false,
          headerRight: () => (
            <IconButton mode="contained" icon={"cog"} onPress={toSettings} />
          ),
        }}
      />
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
}
