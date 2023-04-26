import React from 'react'

import './index.css'

interface HousePieceProps {
  color: string
  piece: string
  value: string
  move: React.FC
  player: string
  selectedPiece: object
  selectPiece: React.FC
}

export const HousePiece: React.FC<HousePieceProps> = ({
  color,
  piece,
  value,
  move,
  player,
  selectedPiece,
  selectPiece
}) => {
  const onClick = (): void => {
    if (selectedPiece?.value) {
      move({ color, icon: piece, value, player })
    } else if (piece !== '') {
      selectPiece({ color, icon: piece, value, player })
    } else {
      selectPiece({})
    }
  }

  return (
    <div className={`house-piece ${color}`} onClick={onClick}>
      <img src={piece} className="piece" draggable="true" />
    </div>
  )
}
