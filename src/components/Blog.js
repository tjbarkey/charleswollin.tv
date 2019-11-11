import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import PostList from "./posts/PostList";
import Loading from "./Loading";
import ReactHtmlParser from "react-html-parser";

const Blog = () => {
  const [blogState, setBlogState] = useState({ loading: true, data: [] });
  const [contentState, setContentState] = useState({ loading: true, data: [] });

  useEffect(() => {
    //query for API - returns array of posts in newest-first order.
    const query = "blogs?_sort=id:DESC";

    //declaring GET request as a function
    const getThis = query => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/${query}`)
        .then(response => {
          setBlogState({
            data: response.data,
            loading: false
          });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    };
    //another get request for the page content
    const getThisContent = () => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/pages?id=3`)
        .then(response => {
          setContentState({
            data: response.data[0],
            loading: false
          });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    };

    //using GET request
    getThisContent();
    getThis(query);

    document.title = "Charles Wollin - Blog";

    //trigger re-render when the loading state changes, which signifies data has been successfully fetched and loaded into data state.
    //also prevents unnecessary rendering of static data
  }, [blogState.loading, contentState.loading]);

  if (contentState.loading || blogState.loading) {
    return (
      <div>
        <Header />
        <Loading />
      </div>
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
                src={contentState.data.mainImage.url}
                alt="main"
              />
            </div>
          </div>
          <div className="accessible-reading">
            <h1>
              {contentState.data.title}
              <hr />
            </h1>

            <p>{ReactHtmlParser(contentState.data.pageContent)}</p>
            <PostList data={blogState} />
          </div>
        </div>
      </div>
    );
  }
};

export default Blog;
