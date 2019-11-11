import React from "react";
import { Link } from "react-router-dom";
import "../../css/Post.css";
import ReactHtmlParser from "react-html-parser";

const Post = props => {
  if (props.content && props.tags) {
    let tags = props.tags.map(tag => (
      <li key={tag.id}>
        <Link to={`/blog/tagged/${tag.tagName}`}>{tag.tagName}</Link>
      </li>
    ));
    return (
      <li className="blog-post">
        <div className="blog-container">
          <div className="pic-box">
            <Link to={`/blog/post/${props.postID}`}>
              <img className="blog-pic" src={props.imgURL} alt="post" />
            </Link>
          </div>
          <div className="sub-box">
            <div className="sub-box-top">
              <h2>
                <Link to={`/blog/post/${props.postID}`}>{props.title}</Link>
                <hr />
              </h2>
              {ReactHtmlParser(props.content)}
            </div>
            <div className="tag-nav">
              <h4>Tags: </h4>
              <ul>{tags[0] ? tags : <li>No Tags</li>}</ul>
            </div>
          </div>
        </div>
      </li>
    );
  } else if (props.content) {
    return (
      <li className="blog-post">
        <div className="blog-container">
          <div className="pic-box">
            <Link to={`/blog/post/${props.postID}`}>
              <img className="blog-pic" src={props.imgURL} alt="post" />
            </Link>
          </div>
          <div className="sub-box">
            <div className="sub-box-top">
              <h2>
                <Link to={`/blog/post/${props.postID}`}>{props.title}</Link>
                <hr />
              </h2>
              {ReactHtmlParser(props.content)}
            </div>
            <div className="tag-nav">
              <h4>Tags: </h4>
              <ul>
                <li>No Tags</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    );
  } else if (props.click) {
    return (
      <li
        className="content-post"
        onClick={() => {
          props.click(props.link);
        }}
      >
        <div className="content-container">
          <div className="content-pic-container">
            <img src={props.imgURL} alt="post" />
          </div>
          <h3>{props.title}</h3>
        </div>
      </li>
    );
  } else {
    return (
      <li className="content-post">
        <a href={props.link}>
          <div className="content-container">
            <div className="content-pic-container">
              <img src={props.imgURL} alt="post" />
            </div>
            <h3>{props.title}</h3>
          </div>
        </a>
      </li>
    );
  }
};

export default Post;
