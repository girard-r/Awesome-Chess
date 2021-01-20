import Piece from './Piece';
import {images} from '../images/images';
import {IBoardPosition} from '../types';

export default class Queen extends Piece {
  constructor(color: string, position: {row: number; column: number}) {
    super(color, position);

    this.image =
      this.getColor() === 'black' ? images.blackQueen : images.whiteQueen;
  }

  public getPossibleMoves(board: Array<Piece | null>[]): IBoardPosition[] {
    const positions: IBoardPosition[] = [];

    /**
     * To Bottom
     */
    for (let row = this.position.row + 1; row < 8; ++row) {
      if (board[row][this.position.column]) {
        /**
         * Edge case to eat a piece
         */
        if (
          (board[row][this.position.column] as Piece).getColor() !==
          this.getColor()
        ) {
          positions.push({
            row,
            column: this.position.column,
            piece: board[row][this.position.column],
          });
        }
        break;
      }
      positions.push({
        row,
        column: this.position.column,
        piece: board[row][this.position.column],
      });
    }

    /**
     * To top
     */
    for (let row = this.position.row - 1; row >= 0; --row) {
      if (board[row][this.position.column]) {
        /**
         * Edge case to eat a piece
         */
        if (
          (board[row][this.position.column] as Piece).getColor() !==
          this.getColor()
        ) {
          positions.push({
            row,
            column: this.position.column,
            piece: board[row][this.position.column],
          });
        }
        break;
      }
      positions.push({
        row,
        column: this.position.column,
        piece: board[row][this.position.column],
      });
    }

    /**
     * To left
     */
    for (let column = this.position.column - 1; column >= 0; --column) {
      if (board[this.position.row][column]) {
        /**
         * Edge case to eat a piece
         */
        if (
          (board[this.position.row][column] as Piece).getColor() !==
          this.getColor()
        ) {
          positions.push({
            row: this.position.row,
            column,
            piece: board[this.position.row][column],
          });
        }
        break;
      }
      positions.push({
        row: this.position.row,
        column,
        piece: board[this.position.row][column],
      });
    }

    /**
     * To right
     */
    for (let column = this.position.column + 1; column < 8; ++column) {
      if (board[this.position.row][column]) {
        /**
         * Edge case to eat a piece
         */
        if (
          (board[this.position.row][column] as Piece).getColor() !==
          this.getColor()
        ) {
          positions.push({
            row: this.position.row,
            column,
            piece: board[this.position.row][column],
          });
        }
        break;
      }
      positions.push({
        row: this.position.row,
        column,
        piece: board[this.position.row][column],
      });
    }

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
