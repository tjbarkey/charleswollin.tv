import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import NotFound from "./NotFound";
import Loading from "./Loading";
import { useRouteMatch } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const BlogPost = props => {
  const [blogPostState, setBlogPostState] = useState({
    loading: true,
    data: { blogPic: { url: null } }
  });

  //get URL props from react router's match
  let url = useRouteMatch("/blog/post/:postID");

  useEffect(() => {
    //get requested post ID to query
    const query = `blogs?id=${url.params.postID}`;
    //declaring GET request as a function
    const getThis = query => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/${query}`)
        //throwing an error if server response is okay but post queried DNE.
        .then(response => {
          if (!response.data[0]) throw response;
          return response;
        })
        .then(response => {
          setBlogPostState({
            data: response.data[0],
            loading: false
          });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
          setBlogPostState({ loading: false, data: "error" });
        });
    };
    document.title = blogPostState.data
      ? blogPostState.data.postTitle
      : "Blog Post";
    //using GET request
    getThis(query);

    //trigger re-render when the loading state changes, which signifies data has been successfully fetched and loaded into data state.
    //also prevents unnecessary rendering of static data
  }, [blogPostState.loading, url.params.postID]);

  //conditional rendering if load error
  if (blogPostState.data === "error") {
    return (
      <>
        <Header />
        <NotFound />
      </>
    );
  } else if (blogPostState.loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="bodyContainer">
          <div className="main-img-box">
            <div className="img-container">
              <img
                className="main-img"
                src={blogPostState.data.blogPic.url}
                alt="main"
              />
            </div>
          </div>
          <div className="accessible-reading">
            <h1>{blogPostState.data.postTitle}</h1>
            {ReactHtmlParser(blogPostState.data.blogPostContent)}
          </div>
        </div>
      </div>
    );
  }
};

export default BlogPost;
