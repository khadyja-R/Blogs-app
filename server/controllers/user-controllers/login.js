
const User = require('../../model/user');
const bcrypt = require("bcrypt");

const Login = async (req, res, next) => {
    const { email, password } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }


    if (!existingUser) {
        return res.status(404).json({ message: "Could not Find User By This Email" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect Password" });
    }

        return res.status(200).json({ message: "Login Successfull" , user:existingUser });
    
}

module.exports = Login;


