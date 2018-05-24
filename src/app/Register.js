import React from "react";
import {forminput,formstyle} from  "./Layout.css";
import styles from "./Layout.css";
import {RegisterEmployer} from "./RegisterEmployer";
import {RegisterJobseeker} from "./RegisterJobseeker";
import { Form, FormGroup, Input, Row} from 'reactstrap';

export class Register extends React.Component{
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
  render() {

    return(
      <div>

      <Form className={formstyle}>
      <p class={styles.formheading}>
<span class={styles.jobseeker} onClick={this.handleJobseeker.bind(this)}>Job Seeker</span>
<span class={styles.hrlong}></span>
<span class={styles.employer} onClick={this.handleEmployer.bind(this)}>Employer</span>
      </p>
      {this.state.isJobseeker?   <RegisterJobseeker/>: '' }
      {this.state.isEmployer?   <RegisterEmployer/> : '' }


      </Form>
      </div>
    );
  }
}
