import React from "react";
import {container} from "bootstrap";
import styles from "./Layout.css";
import {Register} from "./Register";
import {Login} from "./Login";
import {thinDown} from 'react-icons-kit/entypo/thinDown';
import {Icon} from "react-icons-kit";
import {Link} from "react-router-dom";


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
      <div >
      <div class={styles.header}>
      <span class={styles.logo}>Windeed</span>
      <p id={styles.divider}></p>


        <span class="dropdown" id={styles.jobseekerdropdown}>

    <button id={styles.dropdown} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  JOB SEEKER <Icon icon={thinDown} class={styles.arrowdown}/>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.dropdownmenu}>
      <a class="dropdown-item" href="#">Search Jobs</a>
      <a class="dropdown-item" href="#">Search Resume</a>
    </div>
    </span>

  <span class="dropdown" id={styles.employerdropdown}>
  <button id={styles.dropdown} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  EMPLOYER <Icon icon={thinDown} class={styles.arrowdown}/>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.dropdownmenu}>
  <a class="dropdown-item" href="#">Search Talent</a>
  <a class="dropdown-item" href="#">Post Jobs</a>

  </div>
  </span>
      <span class={styles.premium}>PREMIUM PLANS</span>

      <span class={styles.headerright}>
      <Link to="/Login"><span  class={styles.login}>
     LOG IN
      </span></Link>
      <span class={styles.hrshort}></span>
    <Link to="/Register">  <span class={styles.register}>
    REGISTER
      </span></Link>
      </span>

      </div>

      </div>
    );
  }
}
