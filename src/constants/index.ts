import {
  PawnWhite,
  PawnBlack,
  BishopWhite,
  BishopBlack,
  KingWhite,
  KingBlack,
  KnightWhite,
  KnightBlack,
  QueenWhite,
  QueenBlack,
  RookWhite,
  RookBlack
} from '../assets/pieces'

export const boardPositions: object[][] = [
  [
    { value: 'a8', color: 'black', icon: RookBlack },
    { value: 'b8', color: 'white', icon: KnightBlack },
    { value: 'c8', color: 'black', icon: BishopBlack },
    { value: 'd8', color: 'white', icon: KingBlack },
    { value: 'e8', color: 'black', icon: QueenBlack },
    { value: 'f8', color: 'white', icon: BishopBlack },
    { value: 'g8', color: 'black', icon: KnightBlack },
    { value: 'h8', color: 'white', icon: RookBlack }
  ],
  [
    { value: 'a7', color: 'white', icon: PawnBlack },
    { value: 'b7', color: 'black', icon: PawnBlack },
    { value: 'c7', color: 'white', icon: PawnBlack },
    { value: 'd7', color: 'black', icon: PawnBlack },
    { value: 'e7', color: 'white', icon: PawnBlack },
    { value: 'f7', color: 'black', icon: PawnBlack },
    { value: 'g7', color: 'white', icon: PawnBlack },
    { value: 'h7', color: 'black', icon: PawnBlack }
  ],
  [
    { value: 'a6', color: 'black' },
    { value: 'b6', color: 'white' },
    { value: 'c6', color: 'black' },
    { value: 'd6', color: 'white' },
    { value: 'e6', color: 'black' },
    { value: 'f6', color: 'white' },
    { value: 'g6', color: 'black' },
    { value: 'h6', color: 'white' }
  ],
  [
    { value: 'a5', color: 'white' },
    { value: 'b5', color: 'black' },
    { value: 'c5', color: 'white' },
    { value: 'd5', color: 'black' },
    { value: 'e5', color: 'white' },
    { value: 'f5', color: 'black' },
    { value: 'g5', color: 'white' },
    { value: 'h5', color: 'black' }
  ],
  [
    { value: 'a4', color: 'black' },
    { value: 'b4', color: 'white' },
    { value: 'c4', color: 'black' },
    { value: 'd4', color: 'white' },
    { value: 'e4', color: 'black' },
    { value: 'f4', color: 'white' },
    { value: 'g4', color: 'black' },
    { value: 'h4', color: 'white' }
  ],
  [
    { value: 'a3', color: 'white' },
    { value: 'b3', color: 'black' },
    { value: 'c3', color: 'white' },
    { value: 'd3', color: 'black' },
    { value: 'e3', color: 'white' },
    { value: 'f3', color: 'black' },
    { value: 'g3', color: 'white' },
    { value: 'h3', color: 'black' }
  ],
  [
    { value: 'a1', color: 'black', icon: PawnWhite },
    { value: 'a2', color: 'white', icon: PawnWhite },
    { value: 'a3', color: 'black', icon: PawnWhite },
    { value: 'a4', color: 'white', icon: PawnWhite },
    { value: 'a5', color: 'black', icon: PawnWhite },
    { value: 'a6', color: 'white', icon: PawnWhite },
    { value: 'a7', color: 'black', icon: PawnWhite },
    { value: 'a8', color: 'white', icon: PawnWhite }
  ],
  [
    { value: 'a1', color: 'white', icon: RookWhite },
    { value: 'b1', color: 'black', icon: KnightWhite },
    { value: 'c1', color: 'white', icon: BishopWhite },
    { value: 'd1', color: 'black', icon: KingWhite },
    { value: 'e1', color: 'white', icon: QueenWhite },
    { value: 'f1', color: 'black', icon: BishopWhite },
    { value: 'g1', color: 'white', icon: KnightWhite },
    { value: 'h1', color: 'black', icon: RookWhite }
  ]
]
