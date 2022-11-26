import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import Header from './src/header/Header';
import TodosApp from './src/TodosApp/TodosApp';

export default function App() {
  const [theme, setTheme] = useState(true)
  return (
    <ImageBackground style={{width: '100%', height: '100%', flex: 1, backgroundColor: theme ? 'white':'black'}}>
      <Header setTheme={setTheme}/>
      <TodosApp />
    </ImageBackground>

  )
}
