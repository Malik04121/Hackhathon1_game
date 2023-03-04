import { Box, Flex, Input, Text,Wrap,WrapItem,Button,useToast,FormLabel, Spacer, Toast } from "@chakra-ui/react"
import { useState,ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom"

interface Player1Props {
    text: string;
    score:number;
    updateScore: (value: number) => void;
  }

function Player1(props:Player1Props){
    const [value, setValue] = useState('');
    const toast = useToast()
    const [gamerscore,setGamerscore]=useState(0)
    const navigate=useNavigate()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    if(value===props.text){
      const newscore=props.score+1
      setGamerscore(newscore)
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

   const handleEnd = ()=>{
    toast({
      title: "Success",
      description: `Congrats! for your score is ${gamerscore} and rank is 20`,
      status: "success",
      duration: 5000,
      position: "top-right",
      isClosable: true,

    })
    navigate("/")

   }



    return(
        <>
          <Box w="50%" bg="black" p={"20px"}>

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
                <Spacer/>
                <Spacer/>
                <Button bg={"red"} onClick={handleEnd}>End Game</Button>
             </Flex>

          </Box>
        
        </>
    )
  }
export {Player1}