import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { baseColor, darkMode, stylesComments, stylesTask } from "../style";
import { ICommentProps } from '../interfaces';
import Input from "./Input";
import Answer from "./Answer";
import useAlert from "../hooks/alert.hook";
import { AppContext } from "../../App";



function Comments({comment, id}: ICommentProps) {
  const {dark, removeComment, answer} = useContext(AppContext)
  const [showInput, setShowInput] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  
  const addAnswer = (string: string) => {
    if(string){
    answer(id, comment.id,
      {
        id: Date.now(),
        text: string,
        owner: 'user',
        createdAt: new Date(),
        isAnswer: !comment.isAnswer,
        answerCommentId: comment.id,
        answers: []
      }
    )
    setShowInput(false)
  } else {
    useAlert('Title cannot be empty', '')
  }
  }

  return ( 
    <>
      <View style={!comment.isAnswer ? stylesComments.commentWrapper : {...stylesComments.commentWrapper, ...stylesComments.answer}}>
        <Text style={!dark ? stylesComments.text : {...stylesComments.text, ...darkMode.color}}>{comment.text}</Text>
        <View style={stylesTask.subInfo}>
        <Text style={!dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>{comment.createdAt.toUTCString()}</Text>
        <TouchableOpacity onPress={()=>setShowAnswers(prev => !prev)}>
          <MaterialIcons name="arrow-drop-down" size={18} color={!dark ? baseColor.color.color : darkMode.color.color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setShowInput(prev => !prev)}>
            <MaterialIcons name="question-answer" size={18} color={!dark ? baseColor.color.color : darkMode.color.color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>removeComment(id, comment.id)}>
            <MaterialIcons name="delete-outline" size={18} color={!dark ? baseColor.color.color : darkMode.color.color} />
        </TouchableOpacity>
      </View>
    </View>
        <FlatList
          data={showAnswers ? comment.answers : comment.answers.slice(  - 1)}
          renderItem={({item}) => {
          return <Answer comment={item} id={id} />;
          }}
          keyExtractor={item => item.id.toString()}
        /> 
    {
      showInput ? 
      <>
      <Input func={addAnswer} /> 
      <Text style={!dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>
        Ответ на комментарий - {comment.id}
        </Text>
      </>
      : null

    }
          <Text onPress={()=>setShowAnswers(prev => !prev)}
          style={!dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>
          &#8212; Показать все ответы
        </Text>
    </>

    );
}

export default Comments;
