import React from "react";
import {forminput} from "./Layout.css";
import { Form, FormGroup, Input, } from 'reactstrap';
import {Link} from "react-router-dom";


export class LoginJobseeker extends React.Component{

  render(){
    return(
     <div>
      <FormGroup>
        <Input type="email" className={forminput} name="email" id="exampleEmail" placeholder="Email ID" />
      </FormGroup>
      <FormGroup>

        <Input type="password" className={forminput} name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Link to="/JobseekerHomepage"><button type="submit" class="btn btn-outline-default">Submit</button></Link>

     </div>
    );
  }
}
