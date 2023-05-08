import type { IPieceProps } from '../interfaces'

import returnPieceName from '../utils'

import {
  returnBishopPossibleMovimentPositions,
  returnKingPossibleMovimentPositions,
  returnKnightPossibleMovimentPositions,
  returnPawnPossibleMovimentPositions,
  returnQueenPossibleMovimentPositions,
  returnRookPossibleMovimentPositions
} from './pieces'

export const returnAvailablePositions = (
  currentPiecePosition: IPieceProps
): any => {
  const pieceName = returnPieceName(currentPiecePosition)

  const possibleMovimentPositions = returnPossibleMovimentPositions(
    pieceName,
    currentPiecePosition.value
  )

  return possibleMovimentPositions
}

const returnPossibleMovimentPositions = (
  pieceName: string,
  position: string
): any => {
  switch (pieceName) {
    case 'pawn':
      returnPawnPossibleMovimentPositions(position)
      break
    case 'rook':
      returnRookPossibleMovimentPositions(position)
      break
    case 'queen':
      returnQueenPossibleMovimentPositions(position)
      break
    case 'king':
      returnKingPossibleMovimentPositions(position)
      break
    case 'knight':
      returnKnightPossibleMovimentPositions(position)
      break
    case 'bishop':
      returnBishopPossibleMovimentPositions(position)
  }
}
