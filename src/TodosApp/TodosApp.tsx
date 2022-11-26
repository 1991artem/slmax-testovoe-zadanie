import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, Text, FlatList, SafeAreaView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons } from '@expo/vector-icons';
import { ITask, ITodo } from '../interfaces';
import { stylesApp } from '../style';
import Task from '../Task/Task';

export default function TodosApp() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([] as ITodo[])
  const handleAddTodo = () => {
    if (title.length > 0) {
      setTodos([...todos, {
        title: title,
        key: Date.now(),
        complited: false,
        description: description,
        createdAt: new Date()
      }])
      setTitle('')
      setDescription('')
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
      {/* <ScrollView>
        {
            todos.map((task: ITodo) => (
              <Task
                task={task}
                delete={handleDeleteTodo}        
                />
            ))
          }
      </ScrollView> */}
      <FlatList
        data={todos}
        renderItem={({item}) => {
          return <Task task={item} delete={() => handleDeleteTodo(item.key)} />;
        }}
      />
      <View style={stylesApp.textInputContainer}>
        <TextInput
          style={stylesApp.titleInput}
          multiline={true}
          onChangeText={(value) => setTitle(value)}
          placeholder={'Название'}
          placeholderTextColor="black"
          value={title}
        />
        <View style={stylesApp.inputDescriptionContainer}>
          <TextInput
            style={stylesApp.descriptionInput}
            multiline={true}
            onChangeText={(value) => setDescription(value)}
            placeholder={'Текст описание'}
            placeholderTextColor="black"
            value={description}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


