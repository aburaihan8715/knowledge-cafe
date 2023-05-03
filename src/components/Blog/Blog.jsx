import React from "react";
import "./Blog.css";
import blogImg from "../../assets/tech.jpg";
import authorImg from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({blog}) => {
  const {authorImage,author,coverImage,publishDate,readTime,blogTitle}=blog;
  
  return (
    <li className="blogs_item">
      <article className="blogs_content">
        <div className="blogs_cover_photo_box">
          <img className="blogs_cover_photo" src={coverImage} alt="blog photo" />
        </div>

        <div className="author_info_box">
          <div className="author_img_box">
            <img className="author_img" src={authorImage} alt="author photo" />
          </div>

          <div className="author_name_box">
            <p className="author_name heading_secondary">{author}</p>
            <p className="publish_date">{publishDate}</p>
          </div>

          <p className="read_time_box">
            <span className="read_time">{readTime}</span>min read{" "}
            <button className="bookmark_btn">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </p>
        </div>

        <h2 className="heading_primary">{blogTitle}</h2>

        <p className="blogs_type">#programming</p>

        <a className="mark_as_read_link" href="#">
          Mark as read
        </a>
      </article>
    </li>
  );
};

export default Blog;
