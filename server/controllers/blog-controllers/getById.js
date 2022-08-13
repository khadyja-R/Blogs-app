const { default: mongoose } = require("mongoose");
const Blog = require("../../model/blog");
const User = require("../../model/user");



const getById = async(req , res , next)=>{
    const id = req.params.id;

    let blog;

    try{

        blog = await  Blog.findById(id);

    }catch(err){
        return console.log(err);
    }

    if(!blog){
        return res.status(4040).json({message:"No Blog Found"})
    }

    return res.status(200).json({blog});
}

module.exports = getById;