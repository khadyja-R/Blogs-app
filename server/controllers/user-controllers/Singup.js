
const User = require('../../model/user');
const bcrypt = require("bcrypt");

const SingUp = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
         console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User Already Exists! Login Instead" });   
    }
    // const hashedPassword = bcrypt.hashSync(password);
     const salt = bcrypt.genSaltSync(10);
     const hashedPassword = bcrypt.hashSync(password, salt);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: [],
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({ user });
}
module.exports = SingUp;
