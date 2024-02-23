import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="gpt3__blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_single">
          <Article source={blog01} />
        </div>
        <div className="gpt3__blog-container_group">
          <Article source={blog02} />
          <Article source={blog03} />
          <Article source={blog04} />
          <Article source={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
