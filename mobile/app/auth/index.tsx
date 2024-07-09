import { ResErrorMessages } from "@/components/ResErrorMessages";
import { selectError, selectIsPending } from "@/services/redux/auth.selector";
import { authSlice } from "@/services/redux/auth.slice";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const { signUp$, signIn$ } = authSlice.actions;

export default function AuthScreen() {
  const dispatch = useDispatch();
  const isPending = useSelector(selectIsPending);
  const error = useSelector(selectError);

  const [type, setType] = useState<"SIGN_IN" | "SIGN_UP">("SIGN_IN");
  const subtitle = type === "SIGN_IN" ? "Sign in yourself" : "Sign up yourself";
  const buttonText = type === "SIGN_IN" ? "Sign in!" : "Sign up!";
  const buttonTypeText = type === "SIGN_IN" ? "sign up" : "sign in";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const isSignUpDisabled =
    isPending || !email || !password || !passwordR || password !== passwordR;
  const isSignInDisabled = isPending || !email || !password;
  const isDisabled = type === "SIGN_IN" ? isSignInDisabled : isSignUpDisabled;

  const onChangeType = () => {
    type === "SIGN_IN" ? setType("SIGN_UP") : setType("SIGN_IN");
  };
  const onSend = () => {
    if (type === "SIGN_UP") {
      dispatch(signUp$({ email, password }));
    } else {
      dispatch(signIn$({ email, password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title} variant="headlineMedium">
          Nest Expo Playground
        </Text>
        <Text variant="headlineSmall">{subtitle}</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={(v) => setEmail(v)}
          disabled={isPending}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={(v) => setPassword(v)}
          disabled={isPending}
        />
        {type === "SIGN_UP" && (
          <TextInput
            style={styles.input}
            placeholder="repeat password"
            value={passwordR}
            onChangeText={(v) => setPasswordR(v)}
            disabled={isPending}
          />
        )}
        <ResErrorMessages messages={error} />
        <Button
          mode="contained"
          onPress={onSend}
          disabled={isDisabled}
          loading={isPending}
        >
          {buttonText}
        </Button>
        <Button disabled={isPending} onPress={onChangeType}>
          I would like to {buttonTypeText}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    gap: 20,
  },
  input: {
    width: "100%",
  },
  title: {
    textAlign: "center",
  },
});
