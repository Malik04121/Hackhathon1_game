const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    name:{type:String},
    score:{type:Number},
    rank:{type:Number}
},{
    versionKey:false
})


const UserModel=mongoose.model("user",userSchema)


module.exports={

    
    UserModel
}