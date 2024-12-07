const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const salt=10

const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}

}, { timestamps: true })

// hashing password before saving it
userschema.pre('save',async function(next){
    if(!this.isModified('password'))
        return next()
    
    try{
      this.password=await bcrypt.hash(this.password,salt)
      next()

    }catch(error){
        console.log(error)
    }
})




const user=mongoose.model("User",userschema)
module.exports=user