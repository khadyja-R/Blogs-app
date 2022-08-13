const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const reqString = {

    type: String,
    required: true,

}

const reqUer = {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,

}

const reqCreatedAt = {
    type :Date,
    default: Date.now
}

const reqImg = {
    data: Buffer,
}

const BlogShema = new Schema({

    title: reqString,
    description: reqString,
    image: reqString,
    user: reqUer,
    createdAt : reqCreatedAt,
},
)

const Blog = mongoose.model("Blog", BlogShema);

module.exports = Blog;
