import { store } from "@/services/redux/redux";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider></PaperProvider>
    </Provider>
  );
}
