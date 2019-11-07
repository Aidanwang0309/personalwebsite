import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'shared/theme';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Opening } from 'pages/Opening';
import { ICode } from 'pages/ICode';
import { IDesign } from 'pages/IDesign';
import { IMusic } from 'pages/IMusic';
import { DailyOrange } from 'projects/DailyOrange';
import { Marvin } from 'projects/Marvin';
import { NYCParkCrime } from 'projects/NYCParkCrime';
import { APMotion } from 'projects/APMotion';
import { CreativeCoding } from 'projects/CreativeCoding';
import { ImageCollage } from 'projects/ImageCollage';
import { VJ } from 'projects/VJ';
import { SmallProjects } from 'projects/SmallProjects';
import { Tension } from 'projects/Tension';
import { Fluz } from 'projects/Fluz';
import { Law } from 'projects/Law';
import { Spotify } from 'projects/Spotify';
import { RandomUI } from 'projects/RandomUI';
import { Passenger } from "projects/Passenger"
import './App.scss';
import { AnimatePresence } from 'framer-motion';
import { EventsManager } from 'projects/EventsManager';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const DefaultContainer = () => (
  <Fragment>
    <Header />
    <Route component={ScrollToTop} />
    <Route exact path="/icode" component={ICode} />
    <Route exact path="/idesign" component={IDesign} />
    <Route exact path="/imusic" component={IMusic} />
    <Route exact path="/icode/daily-orange" component={DailyOrange} />
    <Route exact path="/icode/marvin-billing-system" component={Marvin} />
    <Route exact path="/icode/park-crime-datav" component={NYCParkCrime} />
    <Route exact path="/icode/ap-motion" component={APMotion} />
    <Route exact path="/icode/creative-coding" component={CreativeCoding} />
    <Route exact path="/icode/image-collage" component={ImageCollage} />
    <Route exact path="/icode/vj" component={VJ} />
    <Route exact path="/icode/tension-of-self" component={Tension} />
    <Route exact path="/icode/random" component={SmallProjects} />
    <Route exact path="/icode/party-animal" component={EventsManager} />
    <Route exact path="/icode/fluz" component={Fluz} />
    <Route exact path="/idesign/law-manager" component={Law} />
    <Route exact path="/idesign/spotify" component={Spotify} />
    <Route exact path="/idesign/random" component={RandomUI} />
    <Route exact path="/idesign/passenger" component={Passenger} />
    <Footer />
  </Fragment>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Opening} />
                <Route component={DefaultContainer} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;

// const routing = (
//   <Router>
//     <Switch>
//       <Route path={`/code/daily-orange-basketball`} component={DailyOrange} />
//       <Route path={`/code/image-collage`} component={ImageCollage} />
//       <Route path={`/code/marvin-billing-system`} component={Marvin} />
//       <Route path={`/code/nyc-park-crime-datav`} component={NYCParkCrime} />
//       <Route path={`/code/small-project`} component={SmallProjects} />
//       <Route path={`/code/tension-of-self`} component={Tension} />
//       <Route path={`/code/creative-coding`} component={CreativeCoding} />
//       <Route path={`/code/ap-motion-capture`} component={APMotion} />
//       <Route path={`/code/vj`} component={Vj} />
//       <Route path="/code" component={Web} />
//       <Route path="/design" component={Design} />
//       <Route path="/music" component={Music} />
//       <Route path="/" exact component={App} />
//     </Switch>
//   </Router>
// );
