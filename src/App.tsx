import React from 'react'

import './App.css'
import { Board } from './ui/screens/board/board'

import { GlobalBoardProvider } from './context/useGlobalBoard'

function App() {
  return (
    <GlobalBoardProvider>
      <Board />
    </GlobalBoardProvider>
  )
}

export default App
