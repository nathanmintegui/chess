import type { IPieceProps } from '../interfaces'

const returnAvailablePositions = (currentPiecePosition: IPieceProps): any => {
  const pieceName = returnPieceName(currentPiecePosition)

  const possibleMovimentPositions = returnPossibleMovimentPositions(
    pieceName,
    currentPiecePosition.value
  )

  return possibleMovimentPositions
}

const returnPieceName = (path: IPieceProps): string => {
  const parts = path.icon.split('/')

  const fileName = parts[parts.length - 1]

  const pieceName = fileName.split('-')[0]

  return pieceName
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
  }
}

const returnPawnPossibleMovimentPositions = (position: string): any => {}

const returnRookPossibleMovimentPositions = (position: string): any => {}

const returnQueenPossibleMovimentPositions = (position: string): any => {}

const returnKingPossibleMovimentPositions = (position: string): any => {}

const returnKnightPossibleMovimentPositions = (position: string): any => {}

export default returnAvailablePositions
