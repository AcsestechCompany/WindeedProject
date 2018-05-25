import React from "react";
import {forminput,formstyle} from  "./Layout.css";
import {Link} from "react-router-dom";
import styles from "./Layout.css";
import {RegisterEmployer} from "./RegisterEmployer";
import {RegisterJobseeker} from "./RegisterJobseeker";
import { Form, FormGroup, Input, Row} from 'reactstrap';
import {Login} from "./Login";
import {OTP} from "./OTP";
import {Header} from "./Header";
export class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isJobseeker:true,
      isEmployer:false,
      Register:true,
      inOTP:false
    }
  }
  handleOTP(){
    this.setState({
      inOTP:true,
      Register:false

    })
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
handleLogin(){
  this.setState({
    Register:false,
    Login:true
  })
}
  render() {

    return(
      <div className={styles.background}>
      <Header/>
      {this.state.Register ?

      <Form className={formstyle}>
      <p class={styles.formheading}>
<span class={styles.jobseeker} onClick={this.handleJobseeker.bind(this)}>
{this.state.isJobseeker ?
  <span class={styles.isActive}>JobSeeker</span> :
  <span>JobSeeker</span>
}
</span>
<span class={styles.hrlong}></span>
<span class={styles.employer} onClick={this.handleEmployer.bind(this)}>
{this.state.isEmployer ?
<span class={styles.isActive}>Employer</span> :
<span>Employer</span>
}

</span>
      </p>
      {this.state.isJobseeker?   <RegisterJobseeker/>: '' }
      {this.state.isEmployer?   <RegisterEmployer/> : '' }
        <Link to="/OTP"><button type="submit" class="btn btn-outline-default" >Submit</button></Link>
<p className={styles.lastliner}>Already Registered ?
<Link to="/Login" className={styles.hyperlink}><span  className={styles.logging}> Log In here</span></Link>
</p>

      </Form>
      :
      ''
    }
    {this.state.Login ?
   <Login/> :
   ''
    }
    {this.state.inOTP ? <OTP/>:''}
      </div>
    );
  }
}
