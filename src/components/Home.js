import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Loading from "./Loading";
import HomePattern from "./HomePattern";
import HomeBall from "./HomeBall";
import HomeDesk from "./HomeDesk";
import { useHistory } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  //creating local state to hold API data from CMS backend
  const [homeState, setHomeState] = useState({ loading: true });
  const [clickedState, setClickedState] = useState({ clicked: false });
  let history = useHistory();

  const clickedAndKicked = e => {
    let extension = `/${e.target.textContent}`;
    setClickedState({ clicked: true });

    setTimeout(function() {
      history.push(extension);
    }, 1000);
  };

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
        <div className="home-body">
          <div className="pattern">
            <div className="home-pattern">
              <HomePattern />
            </div>
            <img
              className={`home-img${clickedState.clicked ? " fly-away" : ""}`}
              src={homeState.data.mainImage.url}
              alt="main"
            />
            <div className={`desk${clickedState.clicked ? " fly-away" : ""}`}>
              <HomeDesk />
            </div>
            <div className={`ball${clickedState.clicked ? " goal" : ""}`}>
              <HomeBall clicked={clickedAndKicked} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
