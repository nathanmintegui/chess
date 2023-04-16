import React from 'react'

import './index.css'

interface HousePieceProps {
  color: string
  piece: string
}

export const HousePiece: React.FC<HousePieceProps> = ({ color, piece }) => {
  return (
    <div className={`house-piece ${color}`}>
      <img src={piece} className='piece' />
    </div>
  )
}
