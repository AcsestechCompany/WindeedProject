import React from "react";
import {container} from "bootstrap";
import styles from "./Layout.css";
import {Register} from "./Register";
import {Login} from "./Login";


export class RegisterPage extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isRegister:false,
      isLogin:false
    }
  }
  handleRegister(){
    this.setState({
      isRegister:true,
      isLogin:false
    })
  }
  handleLogin(){
    this.setState({
      isLogin:true,
      isRegister:false
    })
  }

  render(){
    return(
      <div class={styles.background}>
      <p class={styles.header}>
      <span class={styles.logo}>Windeed</span>
      <span class={styles.divider}></span>


      <span class={styles.premium}>PREMIUM PLANS</span>
      <span class={styles.headerright}>
      <span onClick={this.handleLogin.bind(this)} class={styles.login}>LOG IN</span>
      <span class={styles.hrshort}></span>
      <span onClick={this.handleRegister.bind(this)} class={styles.register}>REGISTER</span>
      </span>
      </p>
      {this.state.isRegister?  <Register/> : '' }
      {this.state.isLogin? <Login/> : ''}
      </div>
    );
  }
}
