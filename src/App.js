import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from 'shared/theme';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Opening } from 'pages/Opening';
import { ICode } from 'pages/ICode';
import { IDesign } from 'pages/IDesign';
import { IMusic } from 'pages/IMusic';
import './App.scss';

const DefaultContainer = () => (
  <Fragment>
    <Header />
    <Route exact path="/icode" component={ICode}></Route>
    <Route exact path="/idesign" component={IDesign}></Route>
    <Route exact path="/imusic" component={IMusic}></Route>
    <Footer />
  </Fragment>
);

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Opening} />
          <Route component={DefaultContainer} />
        </Switch>
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
