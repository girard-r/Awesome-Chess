import {images} from '../images/images';
import {IBoardPosition} from '../types';
import Piece from './Piece';

export default class Knight extends Piece {
  constructor(color: string, position: {row: number; column: number}) {
    super(color, position);
    this.image =
      this.getColor() === 'black' ? images.blackKnight : images.whiteKnight;
  }

  public getPossibleMoves(board: Array<Piece | null>[]): IBoardPosition[] {
    const positions: IBoardPosition[] = [];

    for (
      let column = this.position.column - 2;
      column < this.position.column + 5;
      column += 4
    ) {
      for (
        let row = this.position.row - 1;
        row < this.position.row + 2;
        row += 2
      ) {
        if (
          row >= 0 &&
          row < 8 &&
          column >= 0 &&
          column < 8 &&
          (!board[row][column] ||
            (board[row][column] as Piece).getColor() !== this.getColor())
        ) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
      }
    }

    for (
      let row = this.position.row - 2;
      row < this.position.row + 5;
      row += 4
    ) {
      for (
        let column = this.position.column - 1;
        column < this.position.column + 2;
        column += 2
      ) {
        if (row >= 0 && row < 8 && column >= 0 && column < 8) {
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
