import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Header from "./Header";
import ContentList from "./posts/ContentList";
import Loading from "./Loading";
import { Route, NavLink, Redirect, useRouteMatch } from "react-router-dom";
import "../css/Content.css";
import ReactHtmlParser from "react-html-parser";
import Player from "./Player";
import Footer from "./Footer";

const Content = () => {
  const [articleState, setArticleState] = useState({
    loading: true,
    data: { audio: [], video: [], writing: [] }
  });
  const [contentState, setContentState] = useState({ loading: true, data: [] });
  const [playerState, setPlayerState] = useState({ isVisible: false });
  let match = useRouteMatch("/content/type");

  const playerRef = useRef();
  const clickHandler = link => {
    setPlayerState({ isVisible: true, link: link });
    window.scrollTo(0, playerRef.current.offsetTop);
  };

  const resetPlayer = () => {
    setPlayerState({ isVisible: false });
  };

  useEffect(() => {
    //declaring variable that will be used as an intermediate to load all 3 API data requests to state...simplest method with state hook
    let stateLoader = {};
    //declaring content GET request as a function.  Attempted to make a reusable function, but encountered errors returning the data.  Will revisit.
    const getThisStuff = () => {
      axios
        .get(
          `https://charleswollin-tv.herokuapp.com/works?contentType=video&_sort=id:DESC`
        )
        .then(response => {
          //created a mess of nested .then()s to retrieve different types of content to display discretely
          stateLoader.video = response.data;
          axios
            .get(
              `https://charleswollin-tv.herokuapp.com/works?contentType=audio&_sort=id:DESC`
            )
            .then(response => {
              stateLoader.audio = response.data;
              axios
                .get(
                  `https://charleswollin-tv.herokuapp.com/works?contentType=writing&_sort=id:DESC`
                )
                .then(response => {
                  stateLoader.writing = response.data;
                })
                .catch(error => {
                  //could do something with this fetch error to signal to the user, but won't for the essense of time
                  console.log("Error fetching and parsing data", error);
                });
            })
            .catch(error => {
              console.log("Error fetching and parsing data", error);
            });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        })
        .finally(response => {
          setArticleState({ loading: false, data: stateLoader });
        });
    };

    //getting page content from API
    const getThisContent = () => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/pages?id=4`)
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

    getThisContent();
    getThisStuff();
    document.title = "Charles Wollin - Content";
  }, [articleState.loading, contentState.loading, match.params.url]);

  if (!articleState.loading && !contentState.loading) {
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
          <div className="accessible-reading long-bottom">
            <h1>
              {contentState.data.title}
              <hr />
            </h1>
            {ReactHtmlParser(contentState.data.pageContent)}
          </div>
          <div>
            <div className="course-nav" ref={playerRef}>
              <ul>
                <li onClick={resetPlayer}>
                  <NavLink to={`${match.url}/video`}>Videos</NavLink>
                </li>
                <li onClick={resetPlayer}>
                  <NavLink to={`${match.url}/audio`}>Audio</NavLink>
                </li>
                <li onClick={resetPlayer}>
                  <NavLink to={`${match.url}/writing`}>Writing</NavLink>
                </li>
              </ul>
            </div>

            <Player
              clicked={playerState.isVisible}
              toggle={resetPlayer}
              link={playerState.link}
            />
            <div>
              <Route
                path={match.path}
                render={() => <Redirect to={`${match.path}/video`} />}
              />
              <Route
                path={`${match.path}/video`}
                render={() => (
                  <div>
                    <ContentList
                      click={clickHandler}
                      data={articleState.data.video}
                    />
                  </div>
                )}
              />
              <Route
                path={`${match.path}/audio`}
                render={() => (
                  <div>
                    <ContentList
                      click={clickHandler}
                      data={articleState.data.audio}
                    />
                  </div>
                )}
              />
              <Route
                path={`${match.path}/writing`}
                render={() => (
                  <div>
                    <ContentList data={articleState.data.writing} />
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div>
          <Loading />
        </div>
      </div>
    );
  }
};

export default Content;
