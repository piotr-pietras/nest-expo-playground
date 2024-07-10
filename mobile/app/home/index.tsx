import { postSlice } from "@/services/redux/post.slice";
import {
  selectIsPending,
  selectPosts,
} from "@/services/selectors/post.selector";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { Card, IconButton, Text } from "react-native-paper";
import Animated, {
  SequencedTransition,
  SlideInLeft,
} from "react-native-reanimated";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const { getPosts$ } = postSlice.actions;

export default function HomeScreen() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isPedning = useSelector(selectIsPending);

  useEffect(() => {
    dispatch(getPosts$());
  }, []);

  const toSettings = () => router.navigate("/home/config");
  const toAdd = () => router.navigate("/home/add");
  const onRefresh = () => dispatch(getPosts$());

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

      <View style={styles.container}>
        <IconButton mode="contained" icon="plus" size={32} onPress={toAdd} />
        <Animated.View layout={SequencedTransition}>
          <ScrollView
            style={styles.scroll}
            refreshControl={
              <RefreshControl refreshing={isPedning} onRefresh={onRefresh} />
            }
          >
            {posts.map((post, i) => (
              <Animated.View
                layout={SequencedTransition}
                entering={SlideInLeft.delay(i * 100)}
                key={post.id}
              >
                <Card
                  style={{ ...styles.card, opacity: isPedning ? 0.5 : 1 }}
                  key={post.id}
                >
                  <Text>{post.title}</Text>
                  <Text>{post.body}</Text>
                </Card>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  scroll: {
    minHeight: "100%",
  },
  card: {
    padding: 10,
    marginBottom: 10,
  },
});
