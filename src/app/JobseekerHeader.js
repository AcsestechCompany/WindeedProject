import React from "react";
import styles from "./Layout.css";
import Icon from "react-icons-kit";
import {smallDown,thinDown} from 'react-icons-kit/entypo';
import {Link} from "react-router-dom";

export class JobseekerHeader extends React.Component{
  render(){
    return(
      <div className={styles.headerJ}>

<div className={styles.headerJtxt}>
<span className={styles.windeedheader}>Windeed</span>
<span class="dropdown" className={styles.floatRight}>
<button id={styles.dropdownJ} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Enosh <Icon icon={smallDown} size={25} class={styles.arrowdown2}/>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.dropdownmenu}>
<Link to="/MyJobs" className={styles.hyperlink}><p class="dropdown-item">My Jobs</p></Link>
<Link to="/MyProfile" className={styles.hyperlink}><p class="dropdown-item" >My Profile</p></Link>
<Link to="/HomePage" className={styles.hyperlink}><p class="dropdown-item">Log out</p></Link>
</div>
</span>


</div>


       </div>

    );
  }
}
