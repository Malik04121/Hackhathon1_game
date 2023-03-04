import { Box, Flex, Input, Text } from "@chakra-ui/react"
import { useState,ChangeEvent } from 'react';

interface Player1Props {
    text: string;
    score:number;
    updateScore: (value: number) => void;
  }

function Player1(props:Player1Props){
    const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    if(value===props.text){
      const newscore=props.score+1
      props.updateScore(newscore) 
       alert("matched")
    }
    
  }

    return(
        <>
          <Box w="50%" bg="black" h="90%">

             <Box color="white">
                <Input type="text" value={value} placeholder="Enter the above word" onChange={handleChange}/> 
             </Box>             
             <Flex color="white">
                <Text>{value}</Text>
                <Text>{props.score}</Text>
             </Flex>

          </Box>
        </>
    )
}
export {Player1}