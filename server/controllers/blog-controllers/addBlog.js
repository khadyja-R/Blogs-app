const { default: mongoose } = require("mongoose");
const Blog = require('../../model/blog');
const User = require('../../model/user');
const fs  = require('fs')
const multer = require('multer') ;


const addBlog = async(req , res , next) =>{
    const{title ,  description , image , user} = req.body;
    
    let existingUser ;
     
    try{
     existingUser = await User.findById(user)
    }catch(err){
      return console.log(err)
    }
  
    if(!existingUser){
      return res.status(500).json({message:"Unable to Fin User by this Id"})
    }
  
  
    const blog = new Blog ({
      title , 
      description,
      image,
      Img,
      user,
    });
    try{
  
   const session = await   mongoose.startSession() ;
   session.startTransaction();
   await blog.save({session});
   existingUser.blogs.push(blog);
   await existingUser.save({session});
   await   session.commitTransaction();
  
    }catch(err){
      console.log(err);
    }
  
    return res.status(200).json({blog});
  
  }
  
  module.exports = addBlog;