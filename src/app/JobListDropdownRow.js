import React from "react";
import {thinDown} from 'react-icons-kit/entypo/thinDown';
import {Icon} from "react-icons-kit";
import styles1 from "./Styling.css";
import styles from "./Layout.css";
import {Row,Col} from "reactstrap";

import {caretDown} from 'react-icons-kit/fa/caretDown';
export class JobListDropdownRow extends React.Component{
  render(){
    return(
      <div>
      <Row>

      <span class="dropdown" id={styles1.joblistdropdown} >
  <button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Show 10<Icon icon={caretDown} class={styles1.caretup}/>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.caretdropdown}>
    <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>10</a>
    <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>20</a>
  </div>
  </span>

              <span class="dropdown" id={styles1.joblistdropdown} >
          <button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        LOCATION <Icon icon={thinDown} class={styles1.joblistarrowup}/>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
            <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Hyderabad</a>
            <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Bangalore</a>
          </div>
          </span>


          <span class="dropdown" id={styles1.joblistdropdown} >
      <button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    DESIGNATION<Icon icon={thinDown} class={styles1.joblistarrowup}/>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
        <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Product Manager</a>
        <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>UI Developer</a>
      </div>
      </span>


      <span class="dropdown" id={styles1.joblistdropdown} >
  <button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
EXPERIENCE<Icon icon={thinDown} class={styles1.joblistarrowup}/>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
    <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>0-1 Year</a>
    <a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>>3 Years</a>
  </div>
  </span>


  <span class="dropdown" id={styles1.joblistdropdown}  >
<button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
SALARY<Icon icon={thinDown} class={styles1.joblistarrowup}/>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>2 LPA</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>3-5 LPA</a>
</div>
</span>


<span class="dropdown" id={styles1.joblistdropdown} >
<button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
INDUSTRY<Icon icon={thinDown} class={styles1.joblistarrowup}/>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem} >IT</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Farming</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Revenue</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Teaching</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Medical</a>
</div>
</span>


<span class="dropdown" id={styles1.joblistdropdown} >
<button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
EMPLOYMENT TYPE<Icon icon={thinDown} class={styles1.joblistarrowup}/>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Part Time</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Full Time</a>
</div>
</span>


<span class="dropdown" id={styles1.joblistdropdown}>
<button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
JOB TYPE<Icon icon={thinDown} class={styles1.joblistarrowup}/>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Permanent</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Contract</a>

</div>
</span>



<span class="dropdown" id={styles1.joblistdropdown}>
<button id={styles1.dropdownjoblist} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
SORT BY<Icon icon={thinDown} class={styles1.joblistarrowup}/>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles1.dropdownmenujoblist}>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem} >Latest Posts</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Location</a>
<a class="dropdown-item" href="#" id={styles1.joblistmenuitem}>Experience</a>
</div>
</span>



</Row>
               </div>
    );
  }
}
