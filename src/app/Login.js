import React from "react";
import {forminput,formstyle} from  "./Layout.css";
import styles from "./Layout.css";
import {LoginEmployer} from "./LoginEmployer";
import {LoginJobseeker} from "./LoginJobseeker";
import {Register} from "./Register";
import { Form, FormGroup, Input, } from 'reactstrap';
import {Link} from "react-router-dom";


export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isJobseeker:true,
      isEmployer:false,
      isRegister:false,
    Login:true
    }
  }
handleJobseeker(){
  this.setState({
    isJobseeker:true,
    isEmployer:false
  })
}
handleEmployer(){
  this.setState({
    isEmployer:true,
    isJobseeker:false
  })
}
handleRegister(){
  this.setState({
    isRegister:true,
  Login:false
  })
}
  render(){
    return(
      <div>
{this.state.Login ?
  <Form className={formstyle}>
  <p class={styles.formheading}>
<span class={styles.jobseeker} onClick={this.handleJobseeker.bind(this)}>
{this.state.isJobseeker ?
<span class={styles.isActive}>JobSeeker</span> :
<span>JobSeeker</span>}
</span>
<span class={styles.hrlong}></span>
<span class={styles.employer} onClick={this.handleEmployer.bind(this)}>
{this.state.isEmployer ?
<span class={styles.isActive}>Employer</span> :
<span>Employer</span>
}

</span>
  </p>

  {this.state.isJobseeker?   <LoginJobseeker/>: '' }
  {this.state.isEmployer?   <LoginEmployer/> : '' }

  <p className={styles.lastline}>
  <Link to="/Forgot">   <span className={styles.forgottxt}>Forgot Password</span></Link>
  <span className={styles.createaccount} onClick={this.handleRegister.bind(this)}>Create an Account</span>
  </p>
  </Form>
   : ''}
{this.state.isRegister ? <Register/> : ''}


             </div>
    );
  }
}
