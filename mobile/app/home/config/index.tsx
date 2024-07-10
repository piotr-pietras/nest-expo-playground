import { selectUser } from "@/services/selectors/user.selector";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";

export default function ConfigScreen() {
  const user = useSelector(selectUser);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Configuration",
        }}
      />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text variant="headlineSmall">User info</Text>
          <TextInput mode="outlined" value={user?.id} label={"id"} disabled />
          <TextInput
            mode="outlined"
            value={user?.email}
            label={"email"}
            disabled
          />
        </View>
        <View style={styles.section}>
          <Text variant="headlineSmall">Dev</Text>
          <Button onPress={() => AsyncStorage.clear()}>
            clear token (DEV)
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 40,
    gap: 20,
  },
});
