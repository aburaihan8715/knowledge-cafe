import React, { useEffect, useState } from "react";
import "./BlogsContainer.css";
import Blogs from "../Blogs/Blogs";
import Sidebar from "../Sidebar/Sidebar";

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarkedBlogs, setBookMarkedBlogs] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const spentTimeHandler = (blogReadTime) => {
    setSpentTime((prevSpentTime) => prevSpentTime + blogReadTime);
  };
  // console.log(spentTime);

  const bookMarkedHandler = (blog) => {
    if (bookMarkedBlogs?.find((bookMarkedBlog) => bookMarkedBlog.id === blog.id)) {
      alert("You have already bookmarked this blogs!");
      return;
    }
    const newBookMarkedBlogs = [...bookMarkedBlogs, blog];
    setBookMarkedBlogs(newBookMarkedBlogs);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // console.log(bookMarkedBlogs);

  return (
    <div className="blogs_container">
      <Blogs blogs={blogs} onBookMarkedHandler={bookMarkedHandler} onSpentTimeHandler={spentTimeHandler}></Blogs>
      <Sidebar bookMarkedBlogs={bookMarkedBlogs} spentTime={spentTime}></Sidebar>
    </div>
  );
};

export default BlogsContainer;
