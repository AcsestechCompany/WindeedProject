import React from "react";
import {Card,CardText,Row,Col} from "reactstrap";
import styles1 from "./Layout1.css";
import {Icon} from "react-icons-kit";

import {thumbTack} from 'react-icons-kit/fa/thumbTack'

export class JobDescriptionCard extends React.Component{
  render() {
    return(

<Card className={styles1.jobdescriptioncard}>
<Row>
<Col>
<div className={styles1.carddetails}>
<Card className={styles1.jobcard1}>
<span className={styles1.card1heading}>{this.props.card1heading}</span>
<span className={styles1.location}>{this.props.location}</span>
<span className={styles1.jobtype}>{this.props.jobtype}</span>
<span className={styles1.experience}>{this.props.exp}</span>
<span className={styles1.postedon}>Posted on - {this.props.postedon}</span>

</Card>
</div>
</Col>
<Col>
<Card className={styles1.rightcard}>
<span className={styles1.comp}>Company -
<span className={styles1.compname}>{this.props.compname}</span>
</span><br/>
<span className={styles1.skil}>Key Skills -
<span className={styles1.skilname}>{this.props.skilname}</span>
</span><br/>
<span className={styles1.jobdesc}>Job Description -
<span className={styles1.jobdescname}>{this.props.jobdescname}</span>
</span>
</Card>
</Col>
<Row className={styles1.applyrowup}>
<p className={styles1.apply}>APPLY</p>
<Icon icon={thumbTack} size={20} className={styles1.pin}/>
</Row>
</Row>


<hr className={styles1.hrcolor}/>
<p className={styles1.JDheading}>ABOUT COMPANY</p>
<p className={styles1.JDcontent}>
{this.props.aboutcompany}
</p>
<p className={styles1.JDheading}>JOB DESCRIPTION</p>
<p className={styles1.JDcontent}>{this.props.jobdescription}</p>
<p className={styles1.JDheading}>ROLES & RESPONSIBILITIES</p>
<p className={styles1.JDcontent}>
{this.props.rolesresponsibilities}
</p>
<p className={styles1.JDheading}>PREFFERED CANDIDATE PROFILE</p>
<p className={styles1.JDcontent}>
{this.props.prefferedprofile}
</p>
<Row className={styles1.applyrowdown}>
<p className={styles1.apply}>APPLY</p>
<Icon icon={thumbTack} size={20} className={styles1.pin}/>
</Row>
</Card>


    );
  }
}
