import React from "react";
import {JobseekerHeader} from "./JobseekerHeader";
import styles from "./Layout.css";
import styles1 from "./Styling.css";
import {Row,Col,Card,CardText} from "reactstrap";
import {JobCard} from "./JobCard";
import {Footer} from "./Footer";

export class JobList extends React.Component{
  render(){
    return(

      <div>
 <JobseekerHeader/>
 <div className={styles.pagecontainer}>

 <JobCard
 card1heading={'Front End Web Developer'}
 location={'Bangalore,Karnataka,India'}
 jobtype={'Permanent'}
 exp={'3-5 Years'}
 postedon={'Posted On - April 27,2018'}
 companyname={' Acsestech Consulting Services Pvt Ltd'}
 skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
 JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
 />





      </div>

      </div>
    );
  }
}
