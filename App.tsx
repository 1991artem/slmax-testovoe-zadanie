import React, { createContext, useMemo, useState } from 'react';
import { ImageBackground } from 'react-native';
import useTodos from './src/hooks/todos.hook';
import { IContext, ITodo, ITodosFilter } from './src/interfaces';
import TodosApp from './src/TodosApp/TodosApp';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Require cycle:'])

export const AppContext = createContext({} as IContext);


export default function App() {
  const [dark, setDark] = useState(false)
  const [subInputIsActive, setSubInputIsActive] = useState(false)
  const [filter, setFilter] = useState({
    startDate: new Date(),
    endDate: new Date()
  } as ITodosFilter)

  const {
    todos,
    setTodos,
    removeAnswerFromTodo,
    removeCommentFromTodo,
    addAnswerToTodo,
    addCommentToTodo,
    handleDeleteTodo
  } = useTodos()

  const filterTodosArray = (params: ITodosFilter, todos: ITodo[]) => {
    const start = new Date(params.startDate).toLocaleDateString();
    const end = new Date(params.endDate).toLocaleDateString();
    if(params.startDate && params.endDate){
      return todos.filter((todo: ITodo) => {
          const formatDate = new Date(todo.createdAt).toLocaleDateString()
          if (formatDate >= start && formatDate <= end) return true
        })
    } else {
      return todos;
    }
  }

  const todosAfterFilter = useMemo(()=>filterTodosArray(filter, todos),[filter, todos])

  const todosContext: IContext = {
    deleteTask: handleDeleteTodo,
    addComment: addCommentToTodo,
    answer: addAnswerToTodo,
    removeComment: removeCommentFromTodo,
    removeAnswer: removeAnswerFromTodo,
    dark: dark,
    subInputIsActive, 
    setSubInputIsActive
  }

  return (
    <AppContext.Provider value={todosContext}>
      <ImageBackground style={{width: '100%', height: '100%', flex: 1, backgroundColor: !dark ? 'white':'black'}}>
        <TodosApp 
        dark={dark} 
        todos={todosAfterFilter} 
        setTodos={setTodos}
        setTheme={setDark} 
        setFilter={setFilter}
        />
      </ImageBackground>
    </AppContext.Provider>
  )
}
