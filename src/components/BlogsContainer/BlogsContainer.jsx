import React, { useEffect, useState } from 'react';
import "./BlogsContainer.css"
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const BlogsContainer = () => {

  const [blogs,setBlogs]=useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])


  return (
    <div className='blogs_container'>
      <Blogs blogs={blogs}></Blogs>
      <Sidebar></Sidebar>
    </div>
  );
}

export default BlogsContainer;
