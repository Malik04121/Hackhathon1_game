import { Box, Flex, Text } from "@chakra-ui/react"
import { Player1 } from "./player1"
import { Player2 } from "./player2"
import {useEffect,useState} from "react"

// import io from 'socket.io-client';
// const io = require('socket.io-client');

// const socket = io("http://localhost:3002", {
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
// });

// const socket = io('http://localhost:3002');



function Board(){
    const words = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple'];
    const [text,setText]=useState("")
    const [time,setTime]=useState(0)
    const [score,setScore]=useState(0)
 
  
    
  
function getRandomWord() {
    
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const updateScore = (value: number) => {
  setScore(value);
};

useEffect(()=>{
const interval=setInterval(()=>{
  // setTime(0)
  setText(getRandomWord())
  // setScore(score)
  // console.log(score)
  setTime(time=>time+1)
},3000)

    return () => {
      clearInterval(interval);
      setTime(0)
    };
},[])


    return(
        <>
        <Box w="80%" bg="black" m="auto" h="800px">
              <Text>{time}</Text>
              <Box>
                 <Text>{text}</Text>
              </Box>

            <Flex >
            <Player1 text={text} score={score} updateScore={updateScore} />
            {/* <Player2/>  */}

             </Flex>

        </Box>
        </>
    )
}

export {Board}