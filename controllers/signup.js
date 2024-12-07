const usermodel=require('../models/users')

// CREATING new user
exports.createuser=async(req,res)=>{
    const { name, email, password } = req.body;
    try{
        const newuser=await usermodel.create({
            name,
            email,
            password

        })
        console.log(newuser.name,newuser.email)

        res.status(201).json({
            message:"user added successfully",
          
            
        })
    }catch(error){
        console.log(error)
    }

}



