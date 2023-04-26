import React from 'react'

import './index.css'

interface HousePieceProps {
  color: string
  piece: string
  value: string
  move: (newPosition: object) => void
  player: string
  selectedPiece: object
  selectPiece: (arg: any) => void
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
