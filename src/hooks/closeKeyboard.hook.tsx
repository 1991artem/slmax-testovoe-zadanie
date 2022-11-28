import { useState } from "react";
import { Keyboard } from "react-native";

function useCloseKeyboard(start: boolean) {
  const [keyboardAvoidingView, setKeyboardAvoidingView] = useState(start)
  const closeKeyboard = () => {
    setKeyboardAvoidingView(false)
    Keyboard.dismiss()
  }
  return {
    keyboardAvoidingView, 
    setKeyboardAvoidingView,
    closeKeyboard
  };
}

export default useCloseKeyboard;