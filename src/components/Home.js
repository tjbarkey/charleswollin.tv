import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import HomeSpinner from "./HomeSpinner";
import HomeLogo from "./HomeLogo";
import Loading from "./Loading";
import "../css/Home.css";

const Home = () => {
  //creating local state to hold API data from CMS backend
  const [homeState, setHomeState] = useState({ loading: true });

  useEffect(() => {
    //query for API
    const query = "pages?id=1";

    //declaring GET request as a function - sets state to the object returned in the JSON array
    const getThis = query => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/${query}`)
        .then(response => {
          setHomeState({
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
    //checking for successful GET

    //trigger re-render when the loading state changes, which signifies data has been successfully fetched and loaded into data state.
    //also prevents unnecessary rendering of static data
  }, [homeState.loading]);

  if (homeState.loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Header className="head" />
        <div className="homebody">
          <img
            src={homeState.data.mainImage.url}
            className="home-image"
            alt="home"
          />
          <div className="overlay2">
            <HomeLogo />
          </div>
          <div className="overlay">
            <div className="spin">
              <HomeSpinner opacity="50%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
