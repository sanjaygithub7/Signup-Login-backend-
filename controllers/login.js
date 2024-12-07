const usermodel=require('../models/users')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')

exports.loginuser=async(req,res)=>{

    // Find user in database
    const {email,password}=req.body

    try{
        const user= await usermodel.findOne({email})
        if(!user){
          return res.status(404).json({
                 message:'User not found'
            })
        }

        const validation=await bcrypt.compare(password,user.password)

        if(!validation){
           return res.status(401).json({ message: "Invalid credentials" });
        } 

        const token=jwt.sign({id:user._id,email:user.email},
                 process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN })

            console.log("User logged in successfully:", user.email);

        res.status(200).json({ 
            message: "Login successful", 
            token,
            user: { name: user.name, email: user.email }
        })

        // console.log("Response sent to client:", {
        //     message: "Login successful",
        //     token,
        //     user: { name: user.name, email: user.email }
        // });  for verification purpose of jwt working or not


    }catch(error){
        console.log(error)
        console.log("error in finding user credentials")
        res.status(500).json({ message: "An error occurred. Please try again." });
    }
    


}
