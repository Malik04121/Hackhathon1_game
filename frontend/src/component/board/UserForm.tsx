import { Box, Button, Heading, Image, Input,useToast } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"


function UserForm(){
  const [userName,setUserName]=useState("")
  const navigate=useNavigate()
  const toast = useToast()

  function Submit(){
          localStorage.setItem("username",userName)
          toast({
            title: "Success",
            description: "Enjoy your fruit game.",
            status: "success",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });
          navigate("/game")
  }

    return(
        <>
          <Heading textAlign={"center"}>Let's Play Fruits Game..!😃</Heading>
          <Box w={"100%"}>
          <Box w="30%" bg="black" m="auto" color="white" mt="50px" p="20px">
            <Heading>Your Name</Heading>
            <Box  color="white" mt="20px">
            <Input  value={userName} placeholder="Enter User Name" onChange={(e)=>setUserName(e.target.value)} /> 
           <Button onClick={Submit}  w="100%" bg="orange" fontWeight={"bold"}  border="1px solid white" mt="20px" >Start Game</Button>
            </Box>
          </Box>
          </Box>
          <Box w={"20%"} m={"auto"}>
            <Image src="https://www.getrushapp.com/assets/images/games/fruit_logo_small.png"/>
          </Box>
         
        </>
    )
}
export {UserForm}