import React from 'react'

import './App.css'
import { Board } from './ui/screens/board/board'

import { GlobalContextProvider } from './context/useGlobalContext'
import { GlobalBoardProvider } from './context/useGlobalBoard'

function App() {
  return (
    <GlobalBoardProvider>
      <GlobalContextProvider>
        <Board />
      </GlobalContextProvider>
    </GlobalBoardProvider>
  )
}

export default App
