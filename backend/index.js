const express = require("express")
const app= express()
const cors = require("cors")
// const { postRouter } = require("./routes/Post.route")
const { connection } = require("./config/db")
const { userRouter }=require("./routes/User.route")
const { authenticate } = require("./middlewares/authenticate.middleware")

require("dotenv").config()
app.use(express.json())

app.use(cors())


app.use("/users",userRouter)


app.use(authenticate)
// app.use("/posts",postRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server has running port ${process.env.port}`)
})