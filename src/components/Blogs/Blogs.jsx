import React from "react";
import "./Blogs.css";
import blogImg from "../../assets/tech.jpg";
import authorImg from "../../assets/user.jpg";

const Blogs = () => {
  return (
    <ul className="blogs">
      <li>
        <article>
          <div>
            <img src={blogImg} alt="blog photo" />
          </div>

          <div>
            <div>
              <img src={authorImg} alt="author photo" />
            </div>
            <div>
              <p>Mr. Raju</p>
              <p>Mar 14 (4 Days ago)</p>
            </div>
            <p>
              <span>10 min</span>read <span>
                
              </span>

            </p>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default Blogs;
