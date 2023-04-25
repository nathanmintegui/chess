import React from 'react'

import './index.css'

import useGlobalContext from '../../../context/useGlobalContext'
import useGlobalBoard from '../../../context/useGlobalBoard'

import {
  getColumnNumber,
  getRelativeColumnBoardIndex,
  getRelativeLineBoardIndex
} from '../../../utils/board.utils'

import { boardPositions } from '../../../constants'

interface HousePieceProps {
  color: string
  piece: string
  value: string
}

export const HousePiece: React.FC<HousePieceProps> = ({
  color,
  piece,
  value
}) => {
  const [data, setData] = useGlobalContext()
  const [board, setBoard] = useGlobalBoard()

  const onmousedown = (value: string): void => {
    if (data.initialPosition === null) {
      setData(data => ({
        ...data,
        initialPosition: value
      }))
    } else if (data.finalPosition === null) {
      setData(data => ({
        ...data,
        finalPosition: value
      }))
    } else if (data.initialPosition !== null && data.finalPosition !== null) {
      const columnIndex = getRelativeColumnBoardIndex(getColumnNumber(value))
      const lineIndex = getRelativeLineBoardIndex(value)

      boardPositions[columnIndex][lineIndex].value = 'alterado'
      console.log(boardPositions[columnIndex][lineIndex])
    }
    console.log(data)
  }

  return (
    <div
      className={`house-piece ${color}`}
      onClick={() => {
        onmousedown(value)
      }}
    >
      <p>{value}</p>
      <img src={piece} className="piece" />
    </div>
  )
}
