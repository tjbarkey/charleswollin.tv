import React from "react";
import Post from "./Post";
import NoPosts from "./NoPosts";

const ContentList = props => {
  //creating variable to access the array with less typing
  const results = props.data;

  if (results) {
    //creating variable to store list of components to be returned
    let posts = results.map(post => (
      <Post
        click={props.click}
        title={post.title}
        imgURL={post.thumbnail.url}
        link={post.linkToWork}
        key={post.id}
      />
    ));

    return (
      <div className="floater">
        <ul>{posts}</ul>
      </div>
    );
  } else {
    return (
      <div>
        <NoPosts />
      </div>
    );
  }
};

export default ContentList;
