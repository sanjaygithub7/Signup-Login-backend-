const mongoose=require('mongoose')

const connectdatabase=async()=>{
 await mongoose.connect('mongodb://localhost:27017/signup-login')
 .then((con)=>{
    console.log("Mongodb connected to host:",con.connection.host)
 })
}

module.exports=connectdatabase