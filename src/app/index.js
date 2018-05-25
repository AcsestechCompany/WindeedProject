import React from "react";
import {render} from "react-dom";
import {HashRouter as Router,Route,Link} from "react-router-dom";
import {Login} from "./Login";
import {Register} from "./Register";
import {Test} from "./Test";

export class App extends React.Component{
  render() {
    return(
      <Router>
        <div>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Test" component={Test}/>
        </div>
        </Router>
    );
  }
}
render(<App/>, window.document.getElementById("app"));
