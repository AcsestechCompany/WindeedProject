import React from "react";
import styles1 from "./Layout1.css";
import {Col,Row,Card,CardText} from "reactstrap";

export class JobCard extends React.Component{
  render(){
    return(
      <div>
      <Row>

      <Card className={styles1.jobcard1}>
<span className={styles1.card1heading}>{this.props.card1heading}</span>
<span className={styles1.location}>{this.props.location}</span>
<span className={styles1.jobtype}>{this.props.jobtype}</span>
<span className={styles1.experience}>{this.props.exp}</span>
<span className={styles1.postedon}>{this.props.postedon}</span>
      </Card>


            <Card className={styles1.jobcard2}>
            <span className={styles1.company}>Company -
            <span  className={styles1.companyname}>{this.props.companyname}</span> </span>
            <span className={styles1.keyskills}>Key Skills -
            <span className={styles1.skillsname}>{this.props.skillsname}</span></span>
            <span className={styles1.JD}>Job Description -
            <span className={styles1.JDD}>{this.props.JDD}</span></span>
            <span className={styles1.readmore}>read more >> </span>





            </Card>

      </Row>
      </div>

    );
  }
}
