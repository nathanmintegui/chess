import React, { useState } from 'react'

import './index.css'

import {
  horizontalBoardPositons,
  verticalBoardPositions
} from '../../../constants/index.js'

import { HousePiece } from '../../components/housePiece/housePiece'
import useGlobalBoard from '../../../context/useGlobalBoard'

export const Board: React.FC = () => {
  const [globalBoard] = useGlobalBoard()

  const [board, setBoard] = useState(globalBoard)
  const [selectedPiece, setSelectedPiece] = useState({})

  const movePiece = (newPosition: object): void => {
    if (!newPosition.player) {
      const newPiecePosition = {
        ...newPosition,
        icon: selectedPiece.icon,
        player: selectedPiece.player
      }
      const newBlankPosition = {
        ...selectedPiece,
        icon: '',
        player: ''
      }

      const newBoard = board.map(column =>
        column.map(square => {
          if (newPiecePosition.value === square.value) {
            console.log(newPiecePosition)

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
                {board.map(line =>
                  line.map((house, index) => (
                    <HousePiece
                      key={index}
                      piece={house.icon}
                      color={house.color}
                      value={house.value}
                      player={house.player}
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
