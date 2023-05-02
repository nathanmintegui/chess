import React, { useState } from 'react'

import './index.css'

import {
  horizontalBoardPositons,
  verticalBoardPositions
} from '../../../constants/index.js'

import { HousePiece } from '../../components/housePiece/housePiece'

import useGlobalBoard from '../../../context/useGlobalBoard'

interface IHouse {
  icon: string
  color: string
  value: string
  player: string
}

interface INewPiecePosition {
  icon?: string
  player?: string
  value?: string
}

export const Board: React.FC = () => {
  const [globalBoard] = useGlobalBoard()

  const [board, setBoard] = useState(globalBoard)
  const [selectedPiece, setSelectedPiece] = useState<{
    value?: string
    icon?: string
    player?: string
  }>({})

  const movePiece = (newPosition: object): void => {
    if (!newPosition.player) {
      const newPiecePosition: INewPiecePosition = {
        ...newPosition,
        icon: selectedPiece.icon,
        player: selectedPiece.player
      }
      const newBlankPosition = {
        ...selectedPiece,
        icon: '',
        player: ''
      }

      const newBoard = board.map((column: any) =>
        column.map((square: any) => {
          if (newPiecePosition.value === square.value) {
            return newPiecePosition
          }
          if (selectedPiece.value === square.value) {
            return newBlankPosition
          }

          return square
        })
      )

      setBoard(newBoard)
    }
    setSelectedPiece({})
  }

  return (
    <div className="board-screen">
      <div className="board__border">
        <div className="board__border--horizontal--thick">
          <div className="board__border--top">
            {horizontalBoardPositons.map((position, index) => (
              <div key={index}>{position}</div>
            ))}
          </div>
          <div className="board__border--vertical--thick">
            <div className="board__border--left">
              {verticalBoardPositions.map((position, index) => (
                <div key={index}>{position}</div>
              ))}
            </div>
            <div className="board__border--thin">
              <div className="board-container">
                {board.map((line: any) =>
                  line.map((house: IHouse, index: number) => (
                    <HousePiece
                      key={index}
                      piece={house}
                      move={movePiece}
                      selectedPiece={selectedPiece}
                      selectPiece={setSelectedPiece}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="board__border--right">
              {verticalBoardPositions.map((position, index) => (
                <div key={index}>{position}</div>
              ))}
            </div>
          </div>
          <div className="board__border--bottom">
            {horizontalBoardPositons.map((position, index) => (
              <div key={index}>{position}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
