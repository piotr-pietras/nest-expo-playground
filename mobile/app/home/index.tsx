import { postSlice } from "@/services/redux/post.slice";
import {
  selectIsPending,
  selectPosts,
} from "@/services/selectors/post.selector";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Card, IconButton, Text } from "react-native-paper";
import Animated, {
  FadeIn,
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

      <View style={styles.container}>
        {isPedning && (
          <Animated.View layout={SequencedTransition} entering={FadeIn}>
            <ActivityIndicator animating={true} size={40} />
          </Animated.View>
        )}
        <Animated.View layout={SequencedTransition}>
          <ScrollView>
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
  card: {
    padding: 10,
    marginBottom: 10,
  },
});
