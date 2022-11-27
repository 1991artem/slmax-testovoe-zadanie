import { MaterialIcons } from "@expo/vector-icons"
import React, { useContext, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { ICommentProps } from "../interfaces"
import { stylesComments, darkMode, stylesTask, baseColor } from "../style"
import { AppContext } from "../TodosApp/TodosApp"

function Answer({comment, id}: ICommentProps) {
  const {dark, removeAnswer} = useContext(AppContext)

  return ( 
      <View style={!comment.isAnswer ? stylesComments.commentWrapper : {...stylesComments.commentWrapper, ...stylesComments.answer}}>
        <Text style={!dark ? stylesComments.text : {...stylesComments.text, ...darkMode.color}}>{comment.text}</Text>
        <View style={stylesTask.subInfo}>
        <Text style={!dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>{comment.createdAt.toUTCString()}</Text>
        <TouchableOpacity onPress={()=>removeAnswer(id, comment.id, comment.answerCommentId)}>
            <MaterialIcons name="delete-outline" size={18} color={!dark ? baseColor.color.color : darkMode.color.color} />
        </TouchableOpacity>
      </View>
    </View>
    );
}

export default Answer;