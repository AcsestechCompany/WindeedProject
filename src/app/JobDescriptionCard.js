import React from "react";
import {Card,CardText,Row,Col} from "reactstrap";
import styles1 from "./Layout1.css";

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
</Row>


<hr className={styles1.hrcolor}/>
<p className={styles1.JDheading}>ABOUT COMPANY</p>
{this.props.aboutcompany}
<p className={styles1.JDheading}>JOB DESCRIPTION</p>
<p>{this.props.jobdescription}</p>
<p className={styles1.JDheading}>ROLES & RESPONSIBILITIES</p>
<p className={styles1.rolesresponsibilities}>
{this.props.role1}
{this.props.role2}
{this.props.role3}
</p>
<p className={styles1.JDheading}>PREFFERED CANDIDATE PROFILE</p>
{this.props.prefferedprofile}

</Card>


    );
  }
}
