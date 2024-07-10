import { colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import Animated, { SlideInLeft } from "react-native-reanimated";

interface ResErrorMessagesProps {
  messages?: string | string[];
}

export const ResErrorMessages = ({ messages }: ResErrorMessagesProps) => {
  const isString = typeof messages === "string";

  return (
    <View>
      {isString ? (
        <View style={styles.container}>
          <Icon source={"circle"} size={6} color={colors.alert} />
          <Text style={styles.text}>{messages}</Text>
        </View>
      ) : (
        messages?.map((m, i) => (
          <Animated.View
            entering={SlideInLeft.delay(i * 100)}
            key={m}
            style={styles.container}
          >
            <Icon source={"circle"} size={6} color={colors.alert} />
            <Text style={styles.text}>{m}</Text>
          </Animated.View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: colors.alert,
  },
});
