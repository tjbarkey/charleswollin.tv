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
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import "../css/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFutbol,
  faBroadcastTower,
  faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFutbol, faBroadcastTower, faBars);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
const trackingId = "UA-120634577-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const App = () => {
  return (
    <BrowserRouter history={history}>
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
