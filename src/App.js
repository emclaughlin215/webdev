import React, { Component } from 'react';
import { Button, Intent, Spinner } from "@blueprintjs/core";
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css';
// import cx from 'classnames';
import './App.css';
import { combineLatest } from 'rxjs';

class App extends Component {
  render() {
    const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content");
    return (
      <div>
        <nav className={["navbar", "navbar-inverse"].join(' ')}>
          <div className={"container-fluid"}>
            <div className={"navbar-header"}>
              <a className={"navbar-brand"} href="#"> Edward V. McLaughlin</a>
            </div>
            <ul className={["nav", "navbar-nav"].join(' ')}>

              <li className="active"><a href="#"> <i class="fa fa-home"></i> </a></li>

              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Education
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">European School Culham</a></li>
                  <li><a href="#">University of Bristol</a></li>
                  <li><a href="#">Imperial College London</a></li>
                </ul>
              </li>

              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Work
                <span class="caret"></span></a>
                <ul class="dropdown-menu">

                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Experience/Internships
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Service Industry</a></li>
                      <li><a href="#">Engineering</a></li>
                    </ul>
                  </li>

                  <li><a href="#">First Touch Games Ltd</a></li>
                  <li><a href="#">Palantir Technologies Ltd</a></li>
                </ul>
              </li>

            </ul>
            <ul className={["nav", "navbar-nav", "navbar-right"].join(' ')}>
              <li> <i class="fa fa-github"></i> <a href="https://github.com/emclaughlin215" target="_blank"></a></li>
              <li> <i class="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/edward-mclaughlin-89841960/" target="_blank"></a></li>
            </ul>
          </div>
        </nav>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <myButton type="button">
              <span>Blueprint Button</span>
            </myButton>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
