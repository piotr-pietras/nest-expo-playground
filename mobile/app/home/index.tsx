import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => {
          AsyncStorage.clear();
        }}
      >
        clear token (DEV)
      </Button>
    </View>
  );
}
