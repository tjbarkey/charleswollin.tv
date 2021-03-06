import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content from "./Content";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Blog from "./Blog";
import BlogTagged from "./BlogTagged";
import BlogPost from "./BlogPost";
import WorldCup from "./WorldCup";
import GA from "./GoogleAnalytics";
import Header from "./Header";
import Footer from "./Footer";
import "../css/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMicrophoneAlt,
  faFutbol,
  faBroadcastTower,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

library.add(
  fab,
  faCopyright,
  faFutbol,
  faBroadcastTower,
  faBars,
  faMicrophoneAlt
);

const App = () => {
  return (
    <BrowserRouter>
      {GA.init() && <GA.RouteTracker />}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/post/:postID" component={BlogPost} />
          <Route path="/blog/tagged/:tagName" component={BlogTagged} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/content"
            render={() => <Redirect to="/content/type/video" />}
          />
          <Route
            exact
            path="/content/type"
            render={() => <Redirect to="/content/type/video" />}
          />
          <Route path="/content/type/:type" component={Content} />
          <Route path="/world-cup" component={WorldCup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
