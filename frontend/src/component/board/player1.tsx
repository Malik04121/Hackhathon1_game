import { Box, Flex, Input, Text,Wrap,WrapItem,Button,useToast,FormLabel, Spacer } from "@chakra-ui/react"
import { useState,ChangeEvent } from 'react';

interface Player1Props {
    text: string;
    score:number;
    updateScore: (value: number) => void;
  }

function Player1(props:Player1Props){
    const [value, setValue] = useState('');
    const toast = useToast()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    if(value===props.text){
      const newscore=props.score+1
      props.updateScore(newscore)
      //  alert("matched")
      toast({
        title: "Success",
        description: "Great!, You typed correct fruit name.",
        status: "success",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    }
    // else{
    //   toast({
    //     title: "not found",
    //     description: "Operation completed successfully.",
    //     status: "success",
    //     duration: 5000,
    //     position: "top-right",
    //     isClosable: true,
    //   });
    // }
    
   }

    return(
        <>
          <Box w="50%" bg="black" h="90%">

             <Box color="white">
              <FormLabel>Type Fruit Name-</FormLabel>
                <Input type="text" value={value} placeholder="Enter the above fruit Name" onChange={handleChange}/> 
             </Box>
             <br />             
             <Flex color="white">
                <Text  fontSize='25px' fontWeight="bold" color={"orange"}>{value}</Text>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Text fontSize='25px' fontWeight="bold" color={"orange"}> Score-{props.score}</Text>
             </Flex>

          </Box>
        
        </>
    )
  }
export {Player1}