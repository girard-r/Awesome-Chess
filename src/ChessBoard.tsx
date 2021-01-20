import React, {useCallback, useState} from 'react';
import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import Cell from './Cell';
import Piece from './Pawns/Piece';
import {IBoardPosition} from './types';

export default (props: {
  board: Array<Piece | null>[];
  colorTurn: string;
  setColorTurn: React.Dispatch<React.SetStateAction<string>>;
  setBoard: React.Dispatch<React.SetStateAction<(Piece | null)[][]>>;
}) => {
  /**
   * Array of highlighted positions on the board
   * Highlighted positions corresponds to possible moves of a selected piece
   */
  const [highlighted, setHighlighted] = useState<IBoardPosition[]>([]);

  /**
   * The piece selected, default undefined
   */
  const [cellSelected, setCellSelected] = useState<
    IBoardPosition | undefined
  >();

  return (
    <View style={styles.column}>
      {props.board.map((row, indexRow) => {
        return (
          <View style={styles.row} key={`row-${indexRow}`}>
            {row.map((piece, indexColumn) => {
              return (
                <Cell
                  row={indexRow}
                  column={indexColumn}
                  key={`${indexRow}-${indexColumn}`}
                  board={props.board}
                  piece={piece}
                  highlighted={highlighted}
                  setHighlighted={setHighlighted}
                  selected={
                    !!cellSelected &&
                    cellSelected.row === indexRow &&
                    cellSelected.column === indexColumn
                  }
                  cellSelected={cellSelected}
                  setCellSelected={setCellSelected}
                  colorTurn={props.colorTurn}
                  setColorTurn={props.setColorTurn}
                  setBoard={props.setBoard}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    height: 352,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});
