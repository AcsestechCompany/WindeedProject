import React from "react";
import {forminput,formstyle} from  "./Layout.css";
import styles from "./Layout.css";
import {RegisterEmployer} from "./RegisterEmployer";
import {RegisterJobseeker} from "./RegisterJobseeker";
import { Form, FormGroup, Input, Row} from 'reactstrap';
import {Login} from "./Login";

export class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isJobseeker:true,
      isEmployer:false,
      Register:true
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
handleLogin(){
  this.setState({
    Register:false,
    Login:true
  })
}
  render() {

    return(
      <div>
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
<p className={styles.lastliner}>Already Registered ?
<span onClick={this.handleLogin.bind(this)} className={styles.logging}> Log In here</span>
</p>

      </Form>
      :
      ''
    }
    {this.state.Login ?
   <Login/> :
   ''
    }
      </div>
    );
  }
}
