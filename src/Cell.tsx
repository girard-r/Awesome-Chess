import React, {useCallback} from 'react';
import {GestureResponderEvent, Image, StyleSheet, View} from 'react-native';
import Piece from './Pawns/Piece';
import {IBoardPosition} from './types';

export default (props: {
  row: number;
  column: number;
  piece: Piece | null;
  highlighted: IBoardPosition[];
  setHighlighted: React.Dispatch<React.SetStateAction<IBoardPosition[]>>;
  board: Array<Piece | null>[];
  selected: boolean;
  setCellSelected: React.Dispatch<
    React.SetStateAction<IBoardPosition | undefined>
  >;
  cellSelected: IBoardPosition | undefined;
  colorTurn: string;
  setColorTurn: React.Dispatch<React.SetStateAction<string>>;
  setBoard: React.Dispatch<React.SetStateAction<(Piece | null)[][]>>;
}) => {
  const image = props.piece?.getImage();

  const onTouchStart = (event: GestureResponderEvent) => {
    /**
     * Select a piece and highlight possible moves
     * Check wether its a move to eat a piece, if its the case dont select the piece
     * and highlight positions
     */
    if (
      props.piece &&
      (!props.cellSelected ||
        props.cellSelected.piece?.getColor() === props.piece.getColor())
    ) {
      // Click on a piece on the board, highlight possible moves of the piece
      const possibleMoves = props.piece.getPossibleMoves(props.board);
      props.setHighlighted(possibleMoves);
      props.setCellSelected({
        row: props.row,
        column: props.column,
        piece: props.piece,
      });
    } else {
      // If a piece is selected and cell is highlighted, move the piece there
      if (
        isHighlighted() &&
        props.cellSelected?.piece?.getColor() === props.colorTurn
      ) {
        console.log('move piece');
        /**
         * Move the piece on the board
         * for now modify the whole board, work more on it later
         */
        props.board[props.row][props.column] = props.cellSelected.piece;
        props.board[props.cellSelected.row][props.cellSelected.column] = null;

        /**
         * Update the piece position
         */
        props.cellSelected.piece.setPosition({
          row: props.row,
          column: props.column,
        });

        /**
         * Set Board with new positions and switch turn
         */
        props.setBoard(props.board);
        props.setColorTurn(props.colorTurn === 'white' ? 'black' : 'white');
      }

      /**
       * Refresh selected piece or highlighted positions
       */
      props.setCellSelected(undefined);
      props.setHighlighted([]);
    }
  };

  const isHighlighted = useCallback(() => {
    for (const highlightedPosition of props.highlighted) {
      if (
        props.row === highlightedPosition.row &&
        props.column === highlightedPosition.column
      ) {
        return true;
      }
    }
    return false;
  }, [props.highlighted, props.column, props.row]);

  return (
    <View
      style={
        props.selected
          ? styles.selectedCell
          : (props.row * 7 + props.column) % 2 === 0
          ? isHighlighted()
            ? styles.whitecellHighlighted
            : styles.whitecell
          : isHighlighted()
          ? styles.blackcellHighlighted
          : styles.blackcell
      }
      onTouchStart={onTouchStart}>
      {image ? (
        <Image
          source={image}
          style={styles.piece}
          onError={(error) => {
            console.log(error.nativeEvent.error);
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedCell: {
    width: 44,
    height: 44,
    backgroundColor: 'green',
  },
  whitecell: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
  },
  whitecellHighlighted: {
    width: 44,
    height: 44,
    backgroundColor: 'yellow',
  },
  blackcell: {
    width: 44,
    height: 44,
    backgroundColor: '#555151',
  },
  blackcellHighlighted: {
    width: 44,
    height: 44,
    backgroundColor: '#B7B73F',
  },
  piece: {
    width: 44,
    height: 44,
  },
});
