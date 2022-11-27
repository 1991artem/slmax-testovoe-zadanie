import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import Header from './src/header/Header';
import { ITodosFilter } from './src/interfaces';
import TodosApp from './src/TodosApp/TodosApp';


export default function App() {
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState({
    startDate: new Date(),
    endDate: new Date()
  } as ITodosFilter)

  return (
    <ImageBackground style={{width: '100%', height: '100%', flex: 1, backgroundColor: !dark ? 'white':'black'}}>
      <Header setTheme={setDark} setFilter={setFilter}/>
      <TodosApp dark={dark} filter={filter}/>
    </ImageBackground>
  )
}
