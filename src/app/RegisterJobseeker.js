import React from "react";
import {forminput} from "./Layout.css";
import { Form, FormGroup, Input, Row} from 'reactstrap';


export class RegisterJobseeker extends React.Component{
  render(){
    return(
      <div>
      <FormGroup>
        <Input type="text" className={forminput} name="email" id="exampleName" placeholder="Name" />
      </FormGroup>
         <FormGroup>
           <Input type="email" className={forminput} name="email" id="exampleEmail" placeholder="Email ID" />
         </FormGroup>
         <FormGroup>

           <Input type="password" className={forminput} name="password" id="examplePassword" placeholder="Password" />
         </FormGroup>
        <button type="submit" class="btn btn-outline-default">Submit</button>

        </div>
    );
  }
}
