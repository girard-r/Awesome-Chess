/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ChessBoard from './ChessBoard';
import {defaultBoard} from './utils/boards';
import {cloneDeep} from 'lodash';

// declare const global: {HermesInternal: null | {}};

const App = () => {
  /**
   * Init chess
   */
  const [board, setBoard] = useState(cloneDeep(defaultBoard));
  const [colorTurn, setColorTurn] = useState('white');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={style.container}>
        <Button
          title="Refresh"
          onPress={() => {
            console.log('Button Pressed');
            setBoard(cloneDeep(defaultBoard));
            setColorTurn('white');
          }}
        />
        <ChessBoard
          board={board}
          colorTurn={colorTurn}
          setColorTurn={setColorTurn}
          setBoard={setBoard}
        />
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
