const { default: mongoose } = require("mongoose");

const Blog = require("../../model/blog");
const User = require("../../model/user");

const getByUserId = async (req , res ,next) =>{
    const userId = req.params.id;
    let userBlogs;
    try {
      userBlogs = await User.findById(userId).populate("blogs");
    } catch (err) {
      return console.log(err);
    }
    if (!userBlogs) {
      return res.status(404).json({ message: "No Blog Found" });
    }
    return res.status(200).json({ user: userBlogs });


}


module.exports = getByUserId;