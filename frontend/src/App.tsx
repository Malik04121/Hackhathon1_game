import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { Logo } from "./Logo"
// import Home from "./components/Home"
// import { Board } from "./components/Board/board"

// export const App = () => (
    import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
// import { GameLogic } from './gameLogic';

// import GameLogic from "./gamelogic";
import { Board } from "./component/board/board";
import { MainRoute } from "./component/routes/Route";
import { UserForm } from "./component/board/UserForm";


function App() {
  // const [game, setGame] = useState(new GameLogic());

  // const handleAttack = (row: number, col: number) =>{
    // if (game.attack(row, col)) {
      // alert('You sunk a ship!');
    // }
    // setGame(new GameLogic(game));
  // };

  return (
  <ChakraProvider theme={theme}>
      <MainRoute/>
        {/* <UserForm/> */}
       {/* <Board/> */}
    {/* <Flex justifyContent="center" alignItems="center" height="100vh"> */}
      {/* <Board board={game.board} handleAttack={handleAttack} /> */}
    {/* </Flex> */}
  </ChakraProvider>

  );
}



// )

export {App}

