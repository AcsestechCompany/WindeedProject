import React from "react";
import {Card,CardText,Col,Row} from "reactstrap";
import styles1 from "./Styling.css";



export class JobsCard extends React.Component{
  render(){
    return(

      <div><Card className={styles1.jobscard}>
      <span className={styles1.card1heading}>{this.props.card1heading}</span>
      <span className={styles1.location}>{this.props.location}</span>
      <span className={styles1.jobtype}>{this.props.jobtype}</span>
      <span className={styles1.experience}>{this.props.exp}</span>
      <span className={styles1.postedon}>Posted on - {this.props.postedon}</span>


      </Card></div>
    );
  }
}
