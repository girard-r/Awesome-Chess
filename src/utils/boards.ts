import Bishop from '../Pawns/Bishop';
import King from '../Pawns/King';
import Knight from '../Pawns/Knight';
import Pawn from '../Pawns/Pawn';
import Piece from '../Pawns/Piece';
import Queen from '../Pawns/Queen';
import Rook from '../Pawns/Rook';

const defaultBoard: Array<Piece | null>[] = [
  [
    new Rook('black', {row: 0, column: 0}),
    new Knight('black', {row: 0, column: 1}),
    new Bishop('black', {row: 0, column: 2}),
    new Queen('black', {row: 0, column: 3}),
    new King('black', {row: 0, column: 4}),
    new Bishop('black', {row: 0, column: 5}),
    new Knight('black', {row: 0, column: 6}),
    new Rook('black', {row: 0, column: 7}),
  ],
  [...Array(8).keys()].map((val, index) => {
    return new Pawn('black', {row: 1, column: index});
  }),
  [...Array(8).keys()].map(() => {
    return null;
  }),
  [null, null, null, null, null, null, null, null],
  [...Array(8).keys()].map(() => {
    return null;
  }),
  [...Array(8).keys()].map(() => {
    return null;
  }),
  [...Array(8).keys()].map((val, index) => {
    return new Pawn('white', {row: 6, column: index});
  }),
  [
    new Rook('white', {row: 7, column: 0}),
    new Knight('white', {row: 7, column: 1}),
    new Bishop('white', {row: 7, column: 2}),
    new Queen('white', {row: 7, column: 3}),
    new King('white', {row: 7, column: 4}),
    new Bishop('white', {row: 7, column: 5}),
    new Knight('white', {row: 7, column: 6}),
    new Rook('white', {row: 7, column: 7}),
  ],
];

export {defaultBoard};
