import React from "react";
import {forminput,formstyle} from  "./Layout.css";
import styles from "./Layout.css";
import {LoginEmployer} from "./LoginEmployer";
import {LoginJobseeker} from "./LoginJobseeker";
import { Form, FormGroup, Input, } from 'reactstrap';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isJobseeker:true,
      isEmployer:false
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
  render(){
    return(
      <div>


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

      </Form>
             </div>
    );
  }
}
