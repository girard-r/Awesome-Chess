import {images} from '../images/images';
import {IBoardPosition} from '../types';
import Piece from './Piece';

export default class King extends Piece {
  constructor(color: string, position: {row: number; column: number}) {
    super(color, position);

    this.image =
      this.getColor() === 'black' ? images.blackKing : images.whiteKing;
  }

  public getPossibleMoves(board: Array<Piece | null>[]): IBoardPosition[] {
    const positions: IBoardPosition[] = [];

    for (let row = this.position.row - 1; row < this.position.row + 2; ++row) {
      for (
        let column = this.position.column - 1;
        column < this.position.column + 2;
        ++column
      ) {
        if (
          (column === this.position.column && row === this.position.row) ||
          row < 0 ||
          row > 7 ||
          column < 0 ||
          column > 7
        ) {
          continue;
        }
        if (!board[row][column]) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
      }
    }
    return positions;
  }
}
