import React from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";


const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <ul className="blogs_list">
      {blogs?.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)}
      {/* blogs start */}

      {/* blogs start */}
    </ul>
  );
};

export default Blogs;
