import Piece from './Pawns/Piece';

export interface IBoardPosition {
  row: number;
  column: number;
  piece: Piece | null;
}
