import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { stylesComments, darkMode, stylesApp, baseColor } from "../style";
import { AppContext } from "../TodosApp/TodosApp";
import { IInput } from '../interfaces';

function Input(props: IInput) {
  const {dark} = useContext(AppContext)
  const [comment, setComment] = useState('');

  const touchHandler = () => {
    props.function(comment)
    setComment('')
  }

  return ( 
    <View style={!dark ? stylesComments.input : {...stylesComments.input, ...darkMode.border}}>
    <TextInput
      style={!dark ? stylesApp.descriptionInput : {...stylesApp.descriptionInput, ...darkMode.borderBottomColor, ...darkMode.color}}
      multiline={true}
      onChangeText={(value)=> setComment(value)}
      placeholder={'Комментарий'}
      placeholderTextColor={!dark ? baseColor.color.color : darkMode.color.color}
      value={comment}
    />
    <TouchableOpacity onPress={touchHandler}>
      <MaterialIcons name="add" size={24} color={!dark ? baseColor.color.color : darkMode.color.color} />
    </TouchableOpacity>
  </View>
   );
}

export default Input;