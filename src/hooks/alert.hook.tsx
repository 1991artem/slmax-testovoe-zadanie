import { Alert } from "react-native";

function useAlert(messageFirst: string, messageSecond: string, Func?: ()=>void) {
  Alert.alert(
    messageFirst,
    messageSecond,
    [
      { text: "OK", onPress: () => Func }
    ]
  );
}

export default useAlert;