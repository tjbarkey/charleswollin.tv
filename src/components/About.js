import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Loading from "./Loading";
import ReactHtmlParser from "react-html-parser";

const About = () => {
  const [aboutState, setAboutState] = useState({ loading: true, data: [] });

  useEffect(() => {
    //query for API - returns the information for about page
    const query = "pages?id=2";

    //declaring GET request as a function - sets state to the object returned in the JSON array
    const getThis = query => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/${query}`)
        .then(response => {
          setAboutState({
            data: response.data[0],
            loading: false
          });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    };
    //using GET request
    getThis(query);

    document.title = "Charles Wollin - About";

    //trigger re-render when the loading state changes, which signifies data has been successfully fetched and loaded into data state.
    //also prevents unnecessary rendering of static data
  }, [aboutState.loading]);

  if (aboutState.loading) {
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
                src={aboutState.data.mainImage.url}
                alt="main"
              />
            </div>
          </div>
          <div className="accessible-reading">
            <h1>
              {aboutState.data.title}
              <hr />
            </h1>
            {ReactHtmlParser(aboutState.data.pageContent)}
          </div>
        </div>
      </div>
    );
  }
};

export default About;
