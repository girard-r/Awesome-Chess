import {IBoardPosition} from '../types';

export default abstract class Piece {
  private color: string;
  protected image: any = null;
  protected position: {row: number; column: number};

  constructor(color: string, position: {row: number; column: number}) {
    if (this.constructor === Piece) {
      throw new TypeError(
        'Abstract Class "Piece" cannot be instanciated directly',
      );
    }
    this.color = color;
    this.position = {...position};
  }

  public getColor() {
    return this.color;
  }

  public getImage() {
    return this.image;
  }

  public getPosition() {
    return this.position;
  }

  public setPosition(position: {row: number; column: number}) {
    this.position = {row: position.row, column: position.column};
  }

  public getPossibleMoves(board: Array<Piece | null>[]): IBoardPosition[] {
    throw new Error('Abstract method not implemented');
  }
}
