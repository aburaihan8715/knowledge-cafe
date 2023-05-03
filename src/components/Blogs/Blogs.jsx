import React from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import AnswerBlog from "../AnswerBlog/AnswerBlog";


const Blogs = ({ blogs,onBookMarkedHandler,onSpentTimeHandler }) => {
  console.log(blogs);
  return (
    <ul className="blogs_list">
      {blogs?.map((blog) => <Blog key={blog.id} blog={blog} onBookMarkedHandler={onBookMarkedHandler}
      onSpentTimeHandler={onSpentTimeHandler}></Blog>)}
      <AnswerBlog></AnswerBlog>
    </ul>
  );
};

export default Blogs;
