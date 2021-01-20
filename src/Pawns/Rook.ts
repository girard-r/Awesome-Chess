import {images} from '../images/images';
import {IBoardPosition} from '../types';
import Piece from './Piece';

export default class Rook extends Piece {
  constructor(color: string, position: {row: number; column: number}) {
    super(color, position);
    this.image =
      this.getColor() === 'black' ? images.blackRook : images.whiteRook;
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

    return positions;
  }
}
