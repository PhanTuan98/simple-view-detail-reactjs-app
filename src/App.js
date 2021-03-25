import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./Customers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simple React App</h1>
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/customerlist" />}
            />
            <Route exact path="/customerlist" component={Customers} />
          </Switch>
        </div>
      </Router>
    );
  }
  //   <html lang="en">
  //     <head>
  //       <meta charset="utf-8" />
  //       <meta
  //         name="viewport"
  //         content="width=device-width,initial-scale=1,shrink-to-fit=no"
  //       />
  //       <meta name="theme-color" content="#000000" />
  //       <link rel="manifest" href="/manifest.json" />
  //       <link rel="shortcut icon" href="/favicon.ico" />
  //       <title>React App</title>
  //       <style></style>
  //       <link href="static/css/main.eeeddbdb.css" rel="stylesheet" />
  //     </head>
  //     <body>
  //       <div id="root"></div>
  //       <script
  //         type="text/javascript"
  //         src="static/js/main.6d8464cb.js"
  //       ></script>
  //     </body>
  //   </html>;
  // }
}

export default App;
