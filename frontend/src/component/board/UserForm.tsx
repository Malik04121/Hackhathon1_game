import { Box, Button, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"


function UserForm(){
  const [userName,setUserName]=useState("")
  const navigate=useNavigate()

  function Submit(){
          localStorage.setItem("username",userName)
          navigate("/game")
  }

    return(
        <>
        
          <Box w="40%" bg="black" m="auto" color="white" mt="100px"p="5%">
            <Heading>Game Name</Heading>
            <Box  color="white" mt="20px">
            <Input  value={userName} placeholder="Enter User Name" onChange={(e)=>setUserName(e.target.value)} /> 
           <Button onClick={Submit} w="100%" bg="black" border="1px solid white" mt="20px">Submit</Button>
            </Box>
          
          </Box>
        </>
    )
}
export {UserForm}