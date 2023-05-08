import type { IPieceProps } from '../interfaces'

const returnPieceName = (path: IPieceProps): string => {
  const parts = path.icon.split('/')

  const fileName = parts[parts.length - 1]

  const pieceName = fileName.split('-')[0]

  return pieceName
}

export default returnPieceName
