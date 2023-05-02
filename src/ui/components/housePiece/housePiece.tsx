import React from 'react'

import './index.css'

interface HousePieceProps {
  color: string
  icon: string
  value: string
  move: (newPosition: object) => void
  player: string
  selectedPiece: object
  selectPiece: (arg: any) => void
}

export const HousePiece: React.FC<HousePieceProps> = ({
  color,
  icon,
  value,
  move,
  player,
  selectedPiece,
  selectPiece
}) => {
  const onClick = (): void => {
    if (selectedPiece?.value) {
      move({ color, icon, value, player })
    } else if (icon !== '') {
      selectPiece({ color, icon, value, player })
    } else {
      selectPiece({})
    }
  }

  return (
    <div className={`house-piece ${color}`} onClick={onClick}>
      <img src={icon} className="piece" draggable="true" />
    </div>
  )
}
