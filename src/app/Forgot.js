import React from "react";
import {forminput,formstyle} from "./Layout.css";
import { Form, FormGroup, Input, Row} from 'reactstrap';
import styles from "./Layout.css";
import {Login} from './Login';
import Icon from "react-icons-kit";
import {thinLeft} from 'react-icons-kit/entypo/thinLeft';

export class Forgot extends React.Component{
  constructor(props){
  super(props);
    this.state ={
      inForgot:true,
      toLogin:false
    }
  }

  handleToLogin(){
    this.setState({
      inForgot:false,
      toLogin:true
    })
  }
  render(){
    return(
      <div>
      {this.state.inForgot ?

<Form className={formstyle}>
<p className={styles.forgotcontent}>Forgot Password, Enter your Registered details</p>
         <FormGroup>
           <Input type="email" className={forminput} name="email" id="exampleEmail" placeholder="Enter Email ID" />
         </FormGroup>
        <button type="submit" class="btn btn-outline-default">Submit</button>
        <p onClick={this.handleToLogin.bind(this)} className={styles.back}>
        <Icon icon={thinLeft} class={styles.arrowleft} size={40}/>
        Back</p>
  </Form> :
  ''}
  {this.state.toLogin ?
  <Login/> :
  ''
  }
  </div>
    );
  }
}
