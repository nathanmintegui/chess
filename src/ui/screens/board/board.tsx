import React from 'react'

import './index.css'

import {
  boardPositions,
  horizontalBoardPositons,
  verticalBoardPositions
} from '../../../constants/index.js'

import { HousePiece } from '../../components/housePiece/housePiece'

export const Board: React.FC = () => {
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
                {boardPositions.map(line =>
                  line.map((house, index) => (
                    <HousePiece
                      key={index}
                      piece={house.icon}
                      color={house.color}
                      value={house.value}
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
