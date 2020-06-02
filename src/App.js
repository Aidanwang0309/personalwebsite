import React, {Fragment, useState, useEffect, useRef} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from 'shared/theme'
import * as routes from 'shared/constants/routes'
import {Header} from 'components/Header'
import {Footer} from 'components/Footer'
import {Opening} from 'pages/Opening'
import {ICode} from 'pages/ICode'
import {IDesign} from 'pages/IDesign'
import {IMusic} from 'pages/IMusic'
import './App.scss'
import {AnimatePresence} from 'framer-motion'
import {Cursor} from 'components/Cursor'
import style from 'styled-components'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}

const App = () => {
  const [isDark, setIsDark] = useState(true)

  // useEffect(() => {
  // const handleMouseMove = e => {
  //   const cursor = document.querySelector('#cursor');
  //   cursor.style.left = `${e.pageX}px`
  //   cursor.style.top = `${e.pageY}px`
  // }

  // const handleMouseUp = e => {
  //   const cursor = document.querySelector('#cursor');
  //   cursor.style.width = `2rem`
  //   cursor.style.height = `2rem`
  // }

  // const handleMouseDown = e => {
  //   const cursor = document.querySelector('#cursor');
  //   cursor.style.width = `3rem`
  //   cursor.style.height = `3rem`
  // }
  // window.addEventListener("mousemove", handleMouseMove)
  // window.addEventListener("mousedown", handleMouseUp)
  // window.addEventListener("mousedown", handleMouseDown)

  // return () => {
  // window.removeEventListener("mousemove", handleMouseMove);
  // window.removeEventListener("mousedown", handleMouseUp);
  // window.removeEventListener("mousedown", handleMouseDown);
  //   }
  // })

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <Route
          render={() => (
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route
                  component={() => {
                    return (
                      <Body id="body">
                        {/* <Cursor /> */}
                        <Header idDark={isDark} onChangeTheme={() => setIsDark(!isDark)} />
                        <Route exact path={routes.ROOT} component={Opening} />
                        <Route component={ScrollToTop} />
                        <Route path={routes.CODE} component={ICode} />
                        <Route path={routes.DESIGN} component={IDesign} />
                        <Route exact path={routes.MUSIC} component={IMusic} />
                      </Body>
                    )
                  }}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </ThemeProvider>
  )
}

const Body = style.div`
 background-color: ${props => props.theme.backgroundPrimary};
 height:100%;
 padding-bottom:20vh;
 max-width: 100%;
 overflow-x: hidden;
`

export default App
