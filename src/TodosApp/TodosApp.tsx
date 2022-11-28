import React, { useContext, useState } from 'react';
import { TextInput, TouchableOpacity, View, FlatList, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ITodosApp } from '../interfaces';
import { baseColor, darkMode, stylesApp } from '../style';
import Task from '../Task/Task';
import useAlert from '../hooks/alert.hook';
import Header from '../header/Header';
import useCloseKeyboard from '../hooks/closeKeyboard.hook';
import { AppContext } from '../../App';

export default function TodosApp({ dark, setTodos, todos, setTheme, setFilter }: ITodosApp) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {setKeyboardAvoidingView, closeKeyboard} = useCloseKeyboard(false);

  const {subInputIsActive} = useContext(AppContext)

  const handleAddTodo = () => {
    if (title.length > 0) {
      setTodos([...todos, {
        title: title.trim(),
        key: Date.now(),
        description: description.trim(),
        createdAt: new Date(),
        comments: []
      }])
      setTitle('')
      setDescription('')
      closeKeyboard()
    }
  }

  const checkTitleSize = (string: string) => {
    const titleSize = 25;
    if (string.length > titleSize) {
      const trimString = () => setTitle(string.substring(0, titleSize))
      useAlert("Max title size is 20 characters", "Trim up to 25 characters?", trimString)
    } else {
      return setTitle(string);
    }
  }


  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    enabled={true}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
      <Header setTheme={setTheme} setFilter={setFilter} />
          <SafeAreaView style={stylesApp.container}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <Task task={item}/>;
              }}
              keyExtractor={item => item.key.toString()}
            />
          {
            !subInputIsActive ?
          <View style={!dark ? stylesApp.textInputContainer : { ...stylesApp.textInputContainer, ...darkMode.border, ...darkMode.backgroundBlack }}>
            <TextInput
              style={!dark ? stylesApp.titleInput : { ...stylesApp.titleInput, ...darkMode.borderBottomColor, ...darkMode.color }}
              multiline={true}
              onFocus={()=> setKeyboardAvoidingView(true)}
              onChangeText={(value) => checkTitleSize(value)}
              placeholder={'Название'}
              placeholderTextColor={!dark ? baseColor.color.color : darkMode.color.color}
              value={title}
            />
            <View style={stylesApp.inputDescriptionContainer}>
              <TextInput
                style={!dark ? stylesApp.descriptionInput : { ...stylesApp.descriptionInput, ...darkMode.color }}
                multiline={true}
                onFocus={()=> setKeyboardAvoidingView(true)}
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
          : null
          }
          </SafeAreaView>
          </KeyboardAvoidingView>
  )
}


