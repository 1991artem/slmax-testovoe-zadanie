import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { stylesComments, darkMode, stylesApp, baseColor } from "../style";
import { IInput } from '../interfaces';
import { AppContext } from "../../App";
import useCloseKeyboard from "../hooks/closeKeyboard.hook";

function Input({func}: IInput) {
  const { dark } = useContext(AppContext)
  const [comment, setComment] = useState('');
  const { closeKeyboard } = useCloseKeyboard(false);

  const {setSubInputIsActive} = useContext(AppContext)

  const touchHandler = () => {
    func(comment)
    setSubInputIsActive(false)
    closeKeyboard()
    setComment('')
  }

  return (
    <SafeAreaView style={!dark ? stylesComments.input : { ...stylesComments.input, ...darkMode.border }}>
      <TextInput
        style={!dark ? stylesApp.descriptionInput : { ...stylesApp.descriptionInput, ...darkMode.borderBottomColor, ...darkMode.color }}
        multiline={true}
        onFocus={() => setSubInputIsActive(true)}
        onChangeText={(value) => setComment(value)}
        placeholder={'Комментарий'}
        placeholderTextColor={!dark ? baseColor.color.color : darkMode.color.color}
        value={comment}
      />
      <TouchableOpacity onPress={touchHandler}>
        <MaterialIcons name="add" size={24} color={!dark ? baseColor.color.color : darkMode.color.color} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Input;