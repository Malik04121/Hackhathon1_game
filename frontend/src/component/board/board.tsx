import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import { Player1 } from "./player1"
import { Player2 } from "./player2"
import {useEffect,useState} from "react"
import Headers from "./Headers";

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
    const [time,setTime]=useState(5)
    const [score,setScore]=useState(0)
 
  
    
  
function getRandomWord() {
    
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const updateScore = (value: number) => {
  setScore(value);
};

// useEffect(()=>{
// const interval=setInterval(()=>{
//   // setTime(0)
//   setText(getRandomWord())
//   // setScore(score)
//   // console.log(score)
//   setTime(time=>time+1)
// },3000)

//     return () => {
//       clearInterval(interval);
//       setTime(0)
//     };
// },[])
useEffect(()=>{

  const wordInterval=setInterval(()=>{
    setText(getRandomWord())
  },5000)
  
  const interval=setInterval(()=>{
    console.log(time,"time is this")
    setTime(prevTime => {
      if (prevTime > 0) {
        return prevTime - 1;
      } else {
        return 5;
      }
    });
    
  },1000)
  
      return () => {
        clearInterval(interval);
        clearInterval(wordInterval);
      };
  },[])


    return(
        <>
        <Headers/>
        <Box w="50%" bg="black" m="auto" color={"white"} p={"20px"}>
            <Heading as='h4' size='md'>Updated Time 👇</Heading>
              <Text fontSize='50px'>{time}</Text>
              <Box>
                 <Text fontSize='30px' color={"red"} fontWeight="bold">Fruit Name - {text}</Text>
              </Box>
                <br />
            <Flex >
            <Player1  text={text}  score={score} updateScore={updateScore} />
            {/* <Player2/>  */}

             </Flex>

        </Box>
        </>
    )
}

export {Board}