import React from "react";
import {render} from "react-dom";
import {HashRouter as Router,Route,Link} from "react-router-dom";
import {RegisterPage} from "./RegisterPage";
import {Test} from "./Test";

export class App extends React.Component{
  render() {
    return(
      <Router>
        <div>
          <Route path="/RegisterPage" component={RegisterPage}/>
          <Route path="/Test" component={Test}/>
        </div>
        </Router>
    );
  }
}
render(<App/>, window.document.getElementById("app"));
