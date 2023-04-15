import './index.css';

export const HousePiece = (props: { position: string, color: string }) => {
  return (
    <div className={`house-piece ${props.color}`}>{props.position}</div>
  );
}
