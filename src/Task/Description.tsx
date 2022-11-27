import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { stylesTask, darkMode, baseColor } from "../style";
import { IDescriptionProps } from '../interfaces';
import Comments from "./Comments";
import { AppContext } from "../TodosApp/TodosApp";
import Input from "./Input";
import useAlert from "../hooks/alert.hook";

function Description({props}: IDescriptionProps) {
  const {dark, addComment } = useContext(AppContext)
  const [showComments, setShowComments] = useState(false);

  const addCommentToTodos = (string: string) => {
    if(string){
      addComment(props.key,
        {
          id: Date.now(),
          text: string,
          owner: 'user',
          createdAt: new Date(),
          isAnswer: false,
          answers: [],
        }
      )
    } else {
      useAlert('Title cannot be empty', '')
    }
  }

  return ( 
    <>
    <View style={!dark ? stylesTask.descriptionkWrapper : {...stylesTask.descriptionkWrapper, ...darkMode.borderBottomColor}}>
      <Text style={!dark ? stylesTask.subTitle : {...stylesTask.subTitle, ...darkMode.color}}>{props.title}</Text>
      <Text style={!dark ? stylesTask.mainDescription : {...stylesTask.mainDescription, ...darkMode.color}}>{props.description}</Text>
      <View style={stylesTask.subInfo}>
        <Text style={!dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>{props.createdAt.toUTCString()}</Text>
        <Text style={!dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>Comments: {props.comments.length}</Text>
        <TouchableOpacity onPress={()=> setShowComments(prev => !prev)}>
            <MaterialIcons name="add-comment" size={18} color={!dark ? baseColor.color.color : darkMode.color.color} />
        </TouchableOpacity>
      </View>
    </View>
    {
      showComments ?
      <SafeAreaView>
        <Input function={addCommentToTodos}/>
        <FlatList
          data={props.comments}
          renderItem={({item}) => {
          return <Comments comment={item} id={props.key}/>;
          }}
          keyExtractor={item => item.id.toString()}
        /> 
      </SafeAreaView> : null
    }

    </>

    );
}

export default Description;