import {images} from '../images/images';
import {IBoardPosition} from '../types';
import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(color: string, position: {row: number; column: number}) {
    super(color, position);

    this.image =
      this.getColor() === 'black' ? images.blackPawn : images.whitePawn;
  }

  public getPossibleMoves(board: Array<Piece | null>[]): IBoardPosition[] {
    const positions: IBoardPosition[] = [];
    /**
     * Get basic moves
     */
    let dir = 1;
    if (this.getColor() === 'white') {
      dir = -1;
    }

    if (!board[this.position.row + dir * 1][this.position.column]) {
      const row = this.position.row + dir * 1;
      const column = this.position.column;
      positions.push({
        row,
        column,
        piece: board[row][column],
      });
    }

    /**
     * At init case, pawn can move to 2 positions forward if there are no piece in between
     */
    if (
      (this.position.row === 1 && this.getColor() === 'black') ||
      (this.position.row === 6 && this.getColor() === 'white')
    ) {
      const row = this.position.row + dir * 2;
      const column = this.position.column;
      if (!board[row][column] && !board[this.position.row + dir][column]) {
        positions.push({
          row,
          column,
          piece: board[row][column],
        });
      }
    }

    /**
     * Check diagonal for attack
     */
    for (
      let column = this.position.column - 1;
      column < this.position.column + 2;
      column += 2
    ) {
      const row = this.position.row + dir;
      if (row >= 0 && row < 8 && column >= 0 && column < 8) {
        if (board[row][column]) {
          positions.push({
            row,
            column,
            piece: board[row][column],
          });
        }
      }
    }

    /**
     * @todo: "Prise en passant"
     */
    return positions;
  }
}
