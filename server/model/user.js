const mongoose = require('mongoose');
const Schema =  mongoose.Schema 
const UserShema =  new  Schema ({
    name: {
        type: String,
        required:true,
    },

    email: {

        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength: 8 

    },
  blogs:[{type:mongoose.Types.ObjectId,ref:"Blog", required:true}]


})

const  User = mongoose.model("User" , UserShema);

module.exports = User;
