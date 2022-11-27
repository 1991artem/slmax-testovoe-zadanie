import React, { createContext, useState } from 'react';
import { TextInput, TouchableOpacity, View, FlatList, SafeAreaView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { IContext} from '../interfaces';
import { baseColor, darkMode, stylesApp } from '../style';
import Task from '../Task/Task';
import useAlert from '../hooks/alert.hook';
import useTodos from '../hooks/todos.hook';

export const AppContext = createContext({} as IContext);

export default function TodosApp({dark}:{dark: boolean}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {
    todos,
    setTodos,
    removeAnswerFromTodo,
    removeCommentFromTodo,
    addAnswerToTodo,
    addCommentToTodo,
    handleDeleteTodo
  } = useTodos()

  const titleSize = 25;

  const handleAddTodo = () => {
    if (title.length > 0) {
      setTodos([...todos, {
        title: title,
        key: Date.now(),
        description: description,
        createdAt: new Date(),
        comments: []
      }])
      setTitle('')
      setDescription('')
    }
  }

  const checkTitleSize = (string: string) => {
    if(string.length > 25){
      const trimString = () => setTitle(string.substring(0, titleSize))
      useAlert("Max title size is 20 characters", "Trim up to 25 characters?", trimString )
    } else {
      return setTitle(string);
    }
  }

  const todosContext: IContext = {
    deleteTask: handleDeleteTodo,
    addComment: addCommentToTodo,
    answer: addAnswerToTodo,
    removeComment: removeCommentFromTodo,
    removeAnswer: removeAnswerFromTodo,
    dark: dark
  }

  return (
    <AppContext.Provider value={todosContext}>
      <SafeAreaView style={stylesApp.container}>
        <FlatList
          data={todos}
          renderItem={({item}) => {
            return <Task task={item} />;
          }}
          keyExtractor={item => item.key.toString()}
        />
        <View style={{height: 5}}></View>
        <View style={!dark ? stylesApp.textInputContainer : {...stylesApp.textInputContainer, ...darkMode.border}}>
          <TextInput
            style={!dark ? stylesApp.titleInput : {...stylesApp.titleInput, ...darkMode.borderBottomColor, ...darkMode.color}}
            multiline={true}
            onChangeText={(value) => checkTitleSize(value)}
            placeholder={'Название'}
            placeholderTextColor={!dark ? baseColor.color.color : darkMode.color.color}
            value={title}
          />
          <View style={stylesApp.inputDescriptionContainer}>
            <TextInput
              style={!dark ? stylesApp.descriptionInput : {...stylesApp.descriptionInput, ...darkMode.color}}
              multiline={true}
              onChangeText={(value) => setDescription(value)}
              placeholder={'Текст описание'}
              placeholderTextColor={!dark ? baseColor.color.color : darkMode.color.color}
              value={description}
            />
            <TouchableOpacity onPress={() => handleAddTodo()}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color={!dark ? baseColor.color.color : darkMode.color.color} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </AppContext.Provider>
    
  )
}


