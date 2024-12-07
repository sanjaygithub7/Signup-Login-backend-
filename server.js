const express=require('express')
const connectdatabase=require('./config/connectDB')
const cors=require('cors')
const dotenv=require('dotenv')
const path=require('path')
const app=express()
const port=3000

app.use(cors())
app.use(express.json())

// Load environment variables from 'config/config.env' file using the dotenv package
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectdatabase()

const user=require('./routes/Signup-Route')
const login=require('./routes/login-route')

app.use('/signup', user);
app.use('/login',login)




app.listen(port,()=>{
  console.log("Server is running...")
})