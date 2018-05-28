import  React from "react";
import styles from "./Layout.css";
import {Icon} from "react-icons-kit";
import {thinDown} from 'react-icons-kit/entypo/thinDown';
import {Link} from "react-router-dom";




export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Login:false,
      Register:false
    }
  }
  handleLogin(){
    this.setState({
      Login:true,
      Register:false
    })
  }
  handleRegister(){
    this.setState({
      Login:false,
      Register:true
    })
  }
  render(){
    return(
      <div>
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
  <button id={styles.dropdownJ} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  EMPLOYER <Icon icon={thinDown} class={styles.arrowdown}/>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.dropdownmenu}>
  <a class="dropdown-item" href="#">Search Talent</a>
  <a class="dropdown-item" href="#">Post Jobs</a>
  </div>
  </span>
      <span class={styles.premium}>PREMIUM PLANS</span>

      <span class={styles.headerright}>
      <Link to="/Login" id={styles.hyperlink}><span  class={styles.login} >

     LOG IN
      </span>
      </Link>
      <span class={styles.hrshort} ></span>
      <Link to="/Register" id={styles.hyperlink}>
      <span class={styles.register} >
    REGISTER

      </span>
      </Link>
      </span>


      </div>
      {this.state.Login ? <Login/> :''}
      {this.state.Register ? <Register/> :''}
      </div>
    );
  }
}
