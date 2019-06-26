import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Web from "./pages/Web/Web";
import Design from "./pages/Design/Design";
import Music from "./pages/Music/Music";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DailyOrange from "./projects/DailyOrange/DailyOrange";
import ImageCollage from "./projects/ImageCollage/ImageCollage";
import Marvin from "./projects/Marvin/Marvin";
import NYCParkCrime from "./projects/NYCParkCrime/NYCParkCrime";
import SmallProjects from "./projects/SmallProjects/SmallProjects";
import Tension from "./projects/Tension/Tension";
import Vj from "./projects/VJ/VJ";
import APMotion from "./projects/APMotion/APMotion";
import CreativeCoding from "./projects/CreativeCoding/CreativeCoding";

const routing = (
  <Router>
    <Switch>
      <Route path={`/code/daily-orange-basketball`} component={DailyOrange} />
      <Route path={`/code/image-collage`} component={ImageCollage} />
      <Route path={`/code/marvin-billing-system`} component={Marvin} />
      <Route path={`/code/nyc-park-crime-datav`} component={NYCParkCrime} />
      <Route path={`/code/small-project`} component={SmallProjects} />
      <Route path={`/code/tension-of-self`} component={Tension} />
      <Route path={`/code/creative-coding`} component={CreativeCoding} />
      <Route path={`/code/ap-motion-capture`} component={APMotion} />
      <Route path={`/code/vj`} component={Vj} />
      <Route path="/code" component={Web} />
      <Route path="/design" component={Design} />
      <Route path="/music" component={Music} />
      <Route path="/" exact component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
