import { Box, Button, Input } from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { Board } from "../board/board"
import { UserForm } from "../board/UserForm"

function MainRoute(){

    return(
        <>
         <Routes>
            <Route  path="/"  element={<UserForm/>}/>
            <Route path="/game" element={<Board/>}/>
            
         </Routes>
        </>
    )
}
export {MainRoute}