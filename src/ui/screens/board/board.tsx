import React from 'react'

import './index.css'

import { boardPositions } from '../../../constants/index.js'
import { HousePiece } from '../../components/housePiece/housePiece'

export const Board: React.FC = () => {
  return (
    <div className='board-screen'>
      <div className='board__border--thick'>
        <div className='board__border--thin'>
          <div className="board-container">
            {boardPositions.map(line => line.map((house, index) => <HousePiece key={index} piece={house.icon} color={house.color} />))}
          </div >
        </div>
      </div>
    </div>
  )
}
