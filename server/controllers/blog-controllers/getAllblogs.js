const { default: mongoose } = require("mongoose");
const Blog = require("../../model/blog");
const User = require("../../model/user");

const getAllBlogs = async(req , res ,next)=>  {
    let blogs ;
     
    try{
        blogs = await Blog.find().populate("user")
    }catch(err){
        console.log(err)
    }
    
    if(!blogs){
        return res.status(404).json({message:" no blogs availble"});
    }
    
    return res.status(200).json({blogs});
    
    }
    module.exports = getAllBlogs;