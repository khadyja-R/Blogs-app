import Header from './components/Header';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import { authActions } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import './App.css';

function App() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispath(authActions.login())
    }
  },[dispath]);

  
  return (
    <div className="App">
      <header>
        <Header />
        <main>
          <Routes>
         { !isLoggedIn ? ( <Route path="/login" element={<Login />} />
         ): (
          <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />{" "}
              </>
             )}        
          </Routes>
        </main>
      </header>
    </div>
  );
}
export default App;
