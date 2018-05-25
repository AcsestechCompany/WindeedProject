import React from "react";
import {render} from "react-dom";
import {HashRouter as Router,Route,Link} from "react-router-dom";
import {Login} from "./Login";
import {Register} from "./Register";
import {OTP} from "./OTP";
import {Test} from "./Test";
import {RegisterPage} from "./RegisterPage";

export class App extends React.Component{
  render() {
    return(
      <Router>
        <div>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/OTP" component={OTP}/>
          <Route path="/Test" component={Test}/>
          <Route path="/RegisterPage" component={RegisterPage}/>
        </div>
        </Router>
    );
  }
}
render(<App/>, window.document.getElementById("app"));
