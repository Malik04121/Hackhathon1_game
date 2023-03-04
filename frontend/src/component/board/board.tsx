import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Player1 } from "./player1";
import { Player2 } from "./player2";
import { useEffect, useState } from "react";
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

function Board() {
  const words = [
    "apple",
    "Apricot",
    "Blueberry",
    "Coconut",
    "Cherry",
    "Cranberry",
    "banana",
    "orange",
    "pear",
    "grape",
    "pineapple",
    "Jackfruit",
    "Kiwi",
    "Pomegranate",
    "Papaya",
    "Raspberries",
    "Strawberry",
    "Starfruit",
    "SugarCane",
    "Watermelon",
    "Mulberry",
    "Avocados",
    "Lychee",
    "Tamarind"
  ];
  const [text, setText] = useState("");
  const [time, setTime] = useState(7);
  const [score, setScore] = useState(0);

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const updateScore = (value: number) => {
    setScore(value);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setTime(0)
  //     setText(getRandomWord());
  //     // setScore(score)
  //     // console.log(score)
  //     setTime((time) => time + 1);
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //     setTime(0);
  //   };
  // }, []);
  useEffect(() => {
    const wordInterval=setInterval(()=>{
      setText(getRandomWord())
    },6000)
    
    const interval=setInterval(()=>{
      console.log(time,"time is this")
      setTime(prevTime => {
        if (prevTime >0) {
          return prevTime - 1;
        } else {
          return 7;
        }
      });
      
    },1000)
    
        return () => {
          clearInterval(interval);
          clearInterval(wordInterval);
        };
  }, []);

  return (
    <>
     <Headers/>
      <Box w="50%" bg="black" m="auto" p={"20px"}>
          <Heading as='h3' size='lg' color={"white"}>Enjoy Your Fruit Game 👍</Heading>
        <Text fontSize='3xl' color={"red"} fontWeight={"bold"}>Count Down- {time}</Text>
        <Box>
          <br />
          <Text fontSize='3xl' color={"orange"} fontWeight={"bold"}>Fruit Name- {text}</Text>
        </Box>
        <br />
        <Flex>
          <Player1 text={text} score={score} updateScore={updateScore} />
          {/* <Player2/>  */}
        </Flex>
      </Box>
        <Box width={"50%"} m={"auto"}>
            <Image src="https://cdn.dribbble.com/users/1732626/screenshots/4959371/fruitmatch3_fruit-assets_01_800x600px.png" alt="error"/>
          </Box>
    </>
  );
}

export { Board };
