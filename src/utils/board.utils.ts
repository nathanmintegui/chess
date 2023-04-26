const BOARD_COLUMNS_NUMBER = 8

const getColumnNumber = (value: string): number => {
  return Number(value.slice(-1))
}

const getRelativeColumnBoardIndex = (value: number): number => {
  return BOARD_COLUMNS_NUMBER - value
}

const getRelativeLineBoardIndex = (value: string): number => {
  const letter: string = value.charAt(0)

  const linePositions: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  return linePositions.indexOf(letter)
}

export {
  getRelativeColumnBoardIndex,
  getColumnNumber,
  getRelativeLineBoardIndex
}
