import React from 'react'

import './index.css'

import type IHousePiece from '../../../interfaces'

interface HouseProps {
  piece: IHousePiece
  move: (newPosition: object) => void
  selectedPiece: object
  selectPiece: (arg: any) => void
}

export const HousePiece: React.FC<HouseProps> = ({
  piece,
  move,
  selectedPiece,
  selectPiece
}: HouseProps) => {
  const onClick = (): void => {
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
      <img src={piece.icon} className="piece" draggable="true" />
    </div>
  )
}
