import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'shared/theme';
import * as routes from 'shared/constants/routes';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Opening } from 'pages/Opening';
import { ICode } from 'pages/ICode';
import { IDesign } from 'pages/IDesign';
import { IMusic } from 'pages/IMusic';
import './App.scss';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const DefaultContainer = () => {
  return (
    <Fragment>
      <Header />
      <Route component={ScrollToTop} />
      <Route path={routes.CODE} component={ICode} />
      <Route path={routes.DESIGN} component={IDesign} />
      <Route exact path={routes.MUSIC} component={IMusic} />
      <Footer />
    </Fragment>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route
          render={() => (
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path={routes.ROOT} component={Opening} />
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
