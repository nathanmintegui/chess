import createGlobalState from 'react-create-global-state'

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

const initialState: object[][] = [
  [
    { value: 'a8', color: 'black', icon: RookBlack, player: 'black' },
    { value: 'b8', color: 'white', icon: KnightBlack, player: 'black' },
    { value: 'c8', color: 'black', icon: BishopBlack, player: 'black' },
    { value: 'd8', color: 'white', icon: KingBlack, player: 'black' },
    { value: 'e8', color: 'black', icon: QueenBlack, player: 'black' },
    { value: 'f8', color: 'white', icon: BishopBlack, player: 'black' },
    { value: 'g8', color: 'black', icon: KnightBlack, player: 'black' },
    { value: 'h8', color: 'white', icon: RookBlack, player: 'black' }
  ],
  [
    { value: 'a7', color: 'white', icon: PawnBlack, player: 'black' },
    { value: 'b7', color: 'black', icon: PawnBlack, player: 'black' },
    { value: 'c7', color: 'white', icon: PawnBlack, player: 'black' },
    { value: 'd7', color: 'black', icon: PawnBlack, player: 'black' },
    { value: 'e7', color: 'white', icon: PawnBlack, player: 'black' },
    { value: 'f7', color: 'black', icon: PawnBlack, player: 'black' },
    { value: 'g7', color: 'white', icon: PawnBlack, player: 'black' },
    { value: 'h7', color: 'black', icon: PawnBlack, player: 'black' }
  ],
  [
    { value: 'a6', color: 'black', icon: '', player: '' },
    { value: 'b6', color: 'white', icon: '', player: '' },
    { value: 'c6', color: 'black', icon: '', player: '' },
    { value: 'd6', color: 'white', icon: '', player: '' },
    { value: 'e6', color: 'black', icon: '', player: '' },
    { value: 'f6', color: 'white', icon: '', player: '' },
    { value: 'g6', color: 'black', icon: '', player: '' },
    { value: 'h6', color: 'white', icon: '', player: '' }
  ],
  [
    { value: 'a5', color: 'white', icon: '', player: '' },
    { value: 'b5', color: 'black', icon: '', player: '' },
    { value: 'c5', color: 'white', icon: '', player: '' },
    { value: 'd5', color: 'black', icon: '', player: '' },
    { value: 'e5', color: 'white', icon: '', player: '' },
    { value: 'f5', color: 'black', icon: '', player: '' },
    { value: 'g5', color: 'white', icon: '', player: '' },
    { value: 'h5', color: 'black', icon: '', player: '' }
  ],
  [
    { value: 'a4', color: 'black', icon: '', player: '' },
    { value: 'b4', color: 'white', icon: '', player: '' },
    { value: 'c4', color: 'black', icon: '', player: '' },
    { value: 'd4', color: 'white', icon: '', player: '' },
    {
      value: 'e4',
      color: 'black',
      icon: '',
      player: '',
      availableToMove: false
    },
    { value: 'f4', color: 'white', icon: '', player: '' },
    { value: 'g4', color: 'black', icon: '', player: '' },
    { value: 'h4', color: 'white', icon: '', player: '' }
  ],
  [
    { value: 'a3', color: 'white', icon: '', player: '' },
    { value: 'b3', color: 'black', icon: '', player: '' },
    { value: 'c3', color: 'white', icon: '', player: '' },
    { value: 'd3', color: 'black', icon: '', player: '' },
    {
      value: 'e3',
      color: 'white',
      icon: '',
      player: '',
      availableToMove: false
    },
    {
      value: 'f3',
      color: 'black',
      icon: '',
      player: ''
    },
    { value: 'g3', color: 'white', icon: '', player: '' },
    { value: 'h3', color: 'black', icon: '', player: '' }
  ],
  [
    { value: 'a2', color: 'black', icon: PawnWhite, player: 'white' },
    { value: 'b2', color: 'white', icon: PawnWhite, player: 'white' },
    { value: 'c2', color: 'black', icon: PawnWhite, player: 'white' },
    { value: 'd2', color: 'white', icon: PawnWhite, player: 'white' },
    { value: 'e2', color: 'black', icon: PawnWhite, player: 'white' },
    { value: 'f2', color: 'white', icon: PawnWhite, player: 'white' },
    { value: 'g2', color: 'black', icon: PawnWhite, player: 'white' },
    { value: 'h2', color: 'white', icon: PawnWhite, player: 'white' }
  ],
  [
    { value: 'a1', color: 'white', icon: RookWhite, player: 'white' },
    { value: 'b1', color: 'black', icon: KnightWhite, player: 'white' },
    { value: 'c1', color: 'white', icon: BishopWhite, player: 'white' },
    { value: 'd1', color: 'black', icon: KingWhite, player: 'white' },
    { value: 'e1', color: 'white', icon: QueenWhite, player: 'white' },
    { value: 'f1', color: 'black', icon: BishopWhite, player: 'white' },
    { value: 'g1', color: 'white', icon: KnightWhite, player: 'white' },
    { value: 'h1', color: 'black', icon: RookWhite, player: 'white' }
  ]
]

const [useGlobalBoard, Provider] = createGlobalState(initialState)

export const GlobalBoardProvider = Provider

export default useGlobalBoard
