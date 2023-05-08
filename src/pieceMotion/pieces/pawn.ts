export const returnPawnPossibleMovimentPositions = (
  pieceposition: string
): string[] => {
  const possiblePositions: string[] = []

  const letter: string = pieceposition[0]
  const number: number = Number(pieceposition[1])

  let firstPossibility: string = ''
  let secondPossibility: string = ''

  if (number === 2) {
    firstPossibility = `${letter}${number + 1}`
    secondPossibility = `${letter}${number + 2}`

    possiblePositions.push(firstPossibility, secondPossibility)
  } else {
    firstPossibility = `${letter}${number + 1}`
    possiblePositions.push(firstPossibility)
  }

  return possiblePositions
}
