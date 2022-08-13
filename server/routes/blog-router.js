const express = require("express");
const addBlog = require("../controllers/blog-controllers/addBlog");
const DeleteBlog = require("../controllers/blog-controllers/deleteBlogs");
const getAllBlogs = require("../controllers/blog-controllers/getAllblogs");
const getById = require("../controllers/blog-controllers/getById");
const getByUserId = require("../controllers/blog-controllers/getByUserId");
const UpdateBlog = require("../controllers/blog-controllers/updateBlogs");

const  blogRouter = express.Router();

blogRouter.get("/" , getAllBlogs);

blogRouter.post("/add", addBlog);

blogRouter.get("/:id", getById);


blogRouter.put("/update/:id", UpdateBlog);


blogRouter.delete("/:id", DeleteBlog);

blogRouter.get("/user/:id", getByUserId);

module.exports= blogRouter;