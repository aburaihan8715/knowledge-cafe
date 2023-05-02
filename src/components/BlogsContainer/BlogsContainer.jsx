import React from 'react';
import "./BlogsContainer.css"
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const BlogsContainer = () => {
  return (
    <div className='blogs_container'>
      <Blogs></Blogs>
      <Sidebar></Sidebar>
    </div>
  );
}

export default BlogsContainer;
