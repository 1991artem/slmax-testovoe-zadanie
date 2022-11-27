import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, FlatList, SafeAreaView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ITodo } from '../interfaces';
import { baseColor, darkMode, stylesApp } from '../style';
import Task from '../Task/Task';

export default function TodosApp({dark}:{dark: boolean}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([] as ITodo[])

  const titleSize = 25;

  const handleAddTodo = () => {
    if (title.length > 0) {
      setTodos([...todos, {
        title: title,
        key: Date.now(),
        complited: false,
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
      Alert.alert(
        "Max title size is 20",
        "Trim up to 25 characters?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => setTitle(string.substring(0, titleSize)) }
        ]
      );
    } else {
      return setTitle(string);
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo: ITodo) => {
        if (todo.key !== id) return true
      })
    )
  }

  return (
    <SafeAreaView style={stylesApp.container}>
      <FlatList
        data={todos}
        renderItem={({item}) => {
          return <Task task={item} delete={() => handleDeleteTodo(item.key)} dark={dark}/>;
        }}
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
  )
}


