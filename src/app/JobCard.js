import React from "react";
import styles1 from "./Styling.css";
import {Col,Row,Card,CardText} from "reactstrap";
import {Icon} from "react-icons-kit";
import {thumbTack} from 'react-icons-kit/fa/thumbTack';
import {Link} from "react-router-dom";

export class JobCard extends React.Component{
  render(){
    return(
      <div>
      <Row>


      <Card className={styles1.jobcard1} >
<span className={styles1.card1heading}>{this.props.card1heading}</span>
<span className={styles1.location}>{this.props.location}</span>
<span className={styles1.jobtype}>{this.props.jobtype}</span>
<span className={styles1.experience}>{this.props.exp}</span>
<span className={styles1.postedon}>Posted on - {this.props.postedon}</span>
      </Card>



            <Card className={styles1.jobcard2}>

            <span className={styles1.company}>Company -
            <span  className={styles1.companyname}>{this.props.companyname}</span> </span>
            <span className={styles1.keyskills}>Key Skills -
            <span className={styles1.skillsname}>{this.props.skillsname}</span></span>
            <span className={styles1.JD}>Job Description -
            <span className={styles1.JDD}>{this.props.JDD}</span></span>
          <Link to="/JobDescription" className={styles1.readmore}>  <span >read more >> </span></Link>





            </Card>
            <Row className={styles1.applyjoblist}>
            <p className={styles1.apply}>APPLY</p>
            <Icon icon={thumbTack} size={20} className={styles1.pin}/>
            </Row>

      </Row>
      </div>

    );
  }
}
