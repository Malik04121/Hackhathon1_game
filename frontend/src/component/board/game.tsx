import { useEffect, useState } from "react"
import { Board } from "./board"
import { useNavigate } from "react-router-dom"

function Game(){
    const [timer,setTimer]=useState(true)
    const navigate=useNavigate()

    useEffect(()=>{
        const gametime=setTimeout(()=>{
              setTimer(true)
        },5000)

        return () => {
            setTimer(false)
            clearTimeout(gametime);

          };

    },[])

    {timer&&<Board/>
    }
   
    }
    export {Game}