import './index.css';

import { boardPositions } from '../../../constants/index';
import { HousePiece } from '../../components/housePiece/housePiece';

export const Board = () => {
  return (
    <div className='board-screen'>
      <div className="board-container">
        {boardPositions.map(line => line.map(house => <HousePiece position={house.value} color={house.color} />))}
      </div >
    </div>
  );
}

