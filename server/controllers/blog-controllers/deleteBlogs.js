const { default: mongoose } = require("mongoose");
const User = require('../../model/user');
const Blog = require('../../model/blog');




const DeleteBlog = async(req , res , next ) =>{
    const id = req.params.id;
    let  blog ;
    try{
        blog = await Blog.findByIdAndRemove(id).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    }catch(err){
        return console.log(err);
    }

    if(!blog){
        return res.status(500).json({message:"Unable To Delete"})
    }

    return res.status(200).json({message:"Successfull Delete"});


}

module.exports = DeleteBlog;