import React from "react";
import {formstyle} from "./Layout.css";
import { Form, FormGroup, Input, Row} from 'reactstrap';
import styles from "./Layout.css";
import {Register} from "./Register";
import {Password} from "./Password";
import {Header1} from "./Header1";
import {Link} from "react-router-dom";

export class OTP extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inOtp:true,
      goToRegister:false,
      goToPassword:false
    }
  }
  handleGoToRegister(){
    this.setState({
      goToRegister:true,
      goToPassword:false,
      inOtp:false
    })
  }
  handleGoToPassword(){
    this.setState({
      goToPassword:true,
      goToRegister:false,
      inOtp:false
    })
  }
  render(){
    return(
      <div className={styles.background}>
      <Header1/>
      {this.state.inOtp ?
      <div>
      <p className={styles.otptxt}>OTP has been sent to you on your phone number 9989987678 please enter it below</p>
      <Form className={formstyle}>

<div className={styles.otp}>
<input type="text" className={styles.pass} maxlength="1"/>
<input type="text" className={styles.pass} maxlength="1"/>
<input type="text" className={styles.pass} maxlength="1"/>
<input type="text" className={styles.pass} maxlength="1"/>
</div>
<button type="submit" class="btn btn-default" id={styles.otpsubmit} onClick={this.handleGoToPassword.bind(this)}>Submit</button>
<p className={styles.lastliner}>
<span className={styles.resendotp}>Resend OTP</span>
<Link to="/Register" className={styles.hyperlink}><span className={styles.changeno} >Change number</span></Link>
</p>
       </Form>
       </div> :
       ''}
       {this.state.goToRegister ?  <Register/> : ''}
       {this.state.goToPassword ? <Password/> : ''}
       </div>
    );
  }
}
