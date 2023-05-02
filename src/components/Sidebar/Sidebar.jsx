import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="spent_time heading_secondary mb_md">Spent time on read : 177 min</div>
      <div className="bookmarked_box">
        <h2 className="heading_secondary mb_md">Bookmarked Blogs : 8</h2>
        <ul className="bookmarked_list">
          <li className="bookmarked_item">Master Microsoft Power Platform and Become an In-Demand!</li>
          <li className="bookmarked_item">Master Microsoft Power Platform and Become an In-Demand!</li>
          <li className="bookmarked_item">Master Microsoft Power Platform and Become an In-Demand!</li>
          <li className="bookmarked_item">Master Microsoft Power Platform and Become an In-Demand!</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
