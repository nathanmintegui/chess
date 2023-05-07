import React from 'react'

import './index.css'

import type { IPieceProps } from '../../../interfaces'

interface HouseProps {
  piece: IPieceProps
  selectedPiece: object
  isPositionAvailableToMove: boolean
  move: (newPosition: object) => void
  selectPiece: (arg: any) => void
  showPositionAvailableToMove: (currentPosition: object) => void
}

export const HousePiece: React.FC<HouseProps> = ({
  piece,
  move,
  selectedPiece,
  selectPiece,
  isPositionAvailableToMove,
  showPositionAvailableToMove
}: HouseProps) => {
  const onClick = (): void => {
    showPositionAvailableToMove(piece)
    if (selectedPiece?.value) {
      move({
        color: piece.color,
        icon: piece.icon,
        value: piece.value,
        player: piece.player
      })
    } else if (piece.icon !== '') {
      selectPiece({
        color: piece.color,
        icon: piece.icon,
        value: piece.value,
        player: piece.player
      })
    } else {
      selectPiece({})
    }
  }

  return (
    <div className={`house-piece ${piece.color}`} onClick={onClick}>
      {isPositionAvailableToMove ? <div className="dot"></div> : null}
      <img src={piece.icon} className="piece" draggable="true" />
    </div>
  )
}
