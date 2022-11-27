import { Alert } from "react-native";

function useAlert(messageFirst: string, messageSecond: string, First?: ()=>void, Second?: ()=>void) {
  Alert.alert(
    messageFirst,
    messageSecond,
    [
      {
        text: "Cancel",
        onPress: () => Second,
        style: "cancel"
      },
      { text: "OK", onPress: () => First }
    ]
  );
}

export default useAlert;