import { ResErrorMessages } from "@/components/ResErrorMessages";
import { postSlice } from "@/services/redux/post.slice";
import {
  selectIsPending,
  selectMessage,
} from "@/services/selectors/post.selector";
import { Stack } from "expo-router";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const { addPost$ } = postSlice.actions;

export default function AddScreen() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const message = useSelector(selectMessage);
  const isPending = useSelector(selectIsPending);

  const onAdd = () => {
    dispatch(addPost$({ body, title }));
  };

  return (
    <>
      <Stack.Screen options={{ title: "Add post" }} />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={title}
            label={"title"}
            onChangeText={(v) => setTitle(v)}
          />

          <TextInput
            value={body}
            label={"body"}
            onChangeText={(v) => setBody(v)}
            multiline={true}
            numberOfLines={3}
          />
          <ResErrorMessages messages={message} />
        </View>
        <View>
          <Button
            disabled={isPending}
            loading={isPending}
            mode="contained"
            icon={"plus"}
            onPress={onAdd}
          >
            add
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  inputContainer: {
    gap: 20,
  },
});
