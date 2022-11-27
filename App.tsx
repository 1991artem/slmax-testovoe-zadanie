import React, { createContext, useState } from 'react';
import { ImageBackground } from 'react-native';
import Header from './src/header/Header';
import TodosApp from './src/TodosApp/TodosApp';


export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <ImageBackground style={{width: '100%', height: '100%', flex: 1, backgroundColor: !dark ? 'white':'black'}}>
      <Header setTheme={setDark}/>
      <TodosApp dark={dark}/>
    </ImageBackground>
  )
}
