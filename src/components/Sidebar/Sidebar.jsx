import React from "react";
import "./Sidebar.css";

const Sidebar = ({ bookMarkedBlogs,spentTime }) => {
  console.log(bookMarkedBlogs);
  return (
    <aside className="sidebar">
      <div className="spent_time heading_secondary mb_md">Spent time on read : {spentTime} min</div>
      <div className="bookmarked_box">
        <h2 className="heading_secondary mb_md">Bookmarked Blogs : {bookMarkedBlogs.length}</h2>
        <ul className="bookmarked_list">
          {bookMarkedBlogs.map((bookMarkedBlog) => (
            <li key={bookMarkedBlog.id} className="bookmarked_item">{bookMarkedBlog.blogTitle}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
