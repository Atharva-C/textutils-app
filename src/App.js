// // import logo from './logo.svg';

// // app.js me jo jo likhte hai wo sab render hoke dikhta hai! browser pe!
// // JSX is basically 90 - 95% html only with a few changes like className instead of class and htmlFor instead of for (as they are keyword in js).Names are written in camel case. Also JSX can return only a single element/tag like div, h1 etc. We can also use JSX fragment like <>...</>

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Apphome from './components/Apphome';


function App() {//function based react component

  const [mode, setMode] = useState('light') // It tells which mode is enabled. By default light mode is set
  const [alert, setAlert] = useState(null)

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert("danger", " Dark mode has been enabled")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("success", " Light mode has been enabled")
    }
  }


  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })

    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  return (
    <>
      <Router>
        <Navbar title="Atharva's App" About="About Atharva" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className='container mt-2'>
        <Switch>
        {/* USING EXACT WILL MATCH THE PATH EXACTLY OTHERWISE JUST PARTIALLY */}
        {/* <Route exact path="/home">
              <Apphome mode={mode}/>
          </Route> */}
          <Route exact path="/about">  
              <About mode={mode} />
          </Route>
          <Route exact path="/textform">
              <TextForm msg="Enter the Word" heading="Welcome to Atharva's TEXTFORM Page" showAlert={showAlert} mode={mode} />
          </Route>
          <default>
              <Apphome mode={mode}/>
          </default>
        </Switch>
          {/* <button type="button" onClick={togglemode} className="btn btn-secondary ml-2">Secondary</button> */}
        </div>
      </Router>
    </>
  );
}

export default App;




