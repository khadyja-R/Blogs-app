
const User = require('../../model/user');
const bcrypt = require("bcrypt");

// get all users
const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (err) {
        console.log(err)
    }
    if (!users) {
        return res.status(404).json({ message: "no user found" });

    }
    return res.status(200).json({ users });
}


module.exports = getAllUser;


// singup 



