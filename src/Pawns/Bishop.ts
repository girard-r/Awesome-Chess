import Piece from './Piece';
import {images} from '../images/images';
import {IBoardPosition} from '../types';

export default class Bishop extends Piece {
  constructor(color: string, position: {row: number; column: number}) {
    super(color, position);
    this.image =
      this.getColor() === 'black' ? images.blackBishop : images.whiteBishop;
  }

  public getPossibleMoves(board: Array<Piece | null>[]): IBoardPosition[] {
    const positions: IBoardPosition[] = [];
    /**
     * Diagonals
     */
    let row = this.position.row + 1;
    let column = this.position.column + 1;
    while (row < 8 && column < 8) {
      if (board[row][column]) {
        if ((board[row][column] as Piece).getColor() !== this.getColor()) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
        break;
      }
      positions.push({
        row,
        column,
        piece: board[row][column],
      });
      row += 1;
      column += 1;
    }

    row = this.position.row + 1;
    column = this.position.column - 1;
    while (row < 8 && column >= 0) {
      if (board[row][column]) {
        if ((board[row][column] as Piece).getColor() !== this.getColor()) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
        break;
      }
      positions.push({
        row,
        column,
        piece: board[row][column],
      });
      row += 1;
      column -= 1;
    }

    row = this.position.row - 1;
    column = this.position.column - 1;
    while (row >= 0 && column >= 0) {
      if (board[row][column]) {
        if ((board[row][column] as Piece).getColor() !== this.getColor()) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
        break;
      }
      positions.push({
        row,
        column,
        piece: board[row][column],
      });
      row -= 1;
      column -= 1;
    }

    row = this.position.row - 1;
    column = this.position.column + 1;
    while (row >= 0 && column < 8) {
      if (board[row][column]) {
        if ((board[row][column] as Piece).getColor() !== this.getColor()) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
        break;
      }
      positions.push({
        row,
        column,
        piece: board[row][column],
      });
      row -= 1;
      column += 1;
    }
    return positions;
  }
}
