import React from "react";
import {formstyle,forminput} from "./Layout.css";
import { Form, FormGroup, Input, Row} from 'reactstrap';
import styles from "./Layout.css";

export class Password extends React.Component{
  render(){
    return(
      <div>
      <p className={styles.pwdtxt}>Thank you for registering with Windeed...Create Your Password!!</p>
      <Form className={formstyle}>
      <FormGroup>
        <Input type="password" className={forminput} name="password" id="examplePassword" placeholder="Enter Password" />
      </FormGroup>
      <FormGroup>
        <Input type="password" className={forminput} name="password" id="examplePassword" placeholder="Confirm Password" />
      </FormGroup>
      <button type="submit" class="btn btn-default" >Submit</button>
      </Form>
       </div>
    );
  }
}
