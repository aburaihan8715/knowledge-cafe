import React from "react";
import "./Blogs.css";
import blogImg from "../../assets/tech.jpg";
import authorImg from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <ul className="blogs_list">
      {blogs.map((blog) => (
        <li className="blogs_item">
          <article className="blogs_content">
            <div className="blogs_cover_photo_box">
              <img className="blogs_cover_photo" src={blogImg} alt="blog photo" />
            </div>

            <div className="author_info_box">
              <div className="author_img_box">
                <img className="author_img" src={authorImg} alt="author photo" />
              </div>

              <div className="author_name_box">
                <p className="author_name heading_secondary">Mr. Raju</p>
                <p className="publish_date">Mar 14 (4 Days ago)</p>
              </div>

              <p className="read_time_box">
                <span className="read_time">10 min </span>read{" "}
                <button className="bookmark_btn">
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </p>
            </div>

            <h2 className="heading_primary">How to get your first job as a self-taught programmer</h2>

            <p className="blogs_type">#programming</p>

            <a className="mark_as_read_link" href="#">
              Mark as read
            </a>
          </article>
        </li>
      ))}
      {/* blogs start */}

      {/* blogs start */}
    </ul>
  );
};

export default Blogs;
