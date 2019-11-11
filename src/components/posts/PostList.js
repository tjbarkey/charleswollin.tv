import React from 'react';
import Post from './Post';
import NoPosts from './NoPosts';
import '../../css/Post.css'

const PostList = props => {
  //accessing the array of objects
  const results = props.data.data;



  //creating post objects by iterating through the array and assigning them to the variable 'posts' or sending the noposts component if there are no posts.
  let posts;
  if (results.length) {
    posts = results.map(post => <Post title={post.postTitle} imgURL={post.blogPic.url} content={post.blogPostContent} postID={post.id} tags={post.tags} key={post.id} />);
  } else {
    posts = <NoPosts />
  }

  //fill the list items into the unordered list and pass back to blog.
  return(
    <ul className='group'>
      {posts}
    </ul>
  );



}

export default PostList;
