import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Loading from "./Loading";
import {
  Route,
  NavLink,
  Redirect,
  Router,
  useRouteMatch
} from "react-router-dom";
import "../css/Contact.css";
import ReactHtmlParser from "react-html-parser";
import Footer from "./Footer";

const Contact = () => {
  const [contactState, setContactState] = useState({ loading: true, data: [] });
  let match = useRouteMatch("/Contact/type");
  console.log(match);

  useEffect(() => {
    //getting page Contact from API
    const getThisContact = () => {
      axios
        .get(`https://charleswollin-tv.herokuapp.com/pages?id=5`)
        .then(response => {
          setContactState({
            data: response.data[0],
            loading: false
          });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    };

    getThisContact();
    document.title = "Charles Wollin - Contact";
  }, [contactState.loading]);

  if (contactState.loading) {
    return (
      <div>
        <Header />
        <div>
          <Loading />
        </div>
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
                src={contactState.data.mainImage.url}
                alt="main"
              />
            </div>
          </div>
          <h1>
            {contactState.data.title}
            <hr />
          </h1>
          <p>{ReactHtmlParser(contactState.data.pageContent)}</p>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Contact;
