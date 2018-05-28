import React from "react";
import {Card,Row,Col,CardText} from "reactstrap";
import styles from "./Layout.css";
import {JobseekerHeader} from "./JobseekerHeader";
import Toggle from "react-toggle";
import Chips, { Chip } from "react-chips";
import CircularProgressbar from "react-circular-progressbar";

export class JobseekerHomepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    eggsAreReady:false,
        chips: []

    };
  }
handleEggsChange = (event) => {
    this.setState({eggsAreReady: event.target.checked});
}


onChange = chips => {
  this.setState({ chips });
}


  render(){
    return(
      <div>
      <JobseekerHeader/>
      <div className={styles.container}>
<Card className={styles.profileupdate}>
<Row>
<Col xs="4">

<img src={require('./profilepic.png') } className={styles.profilepic}/>


            <Toggle
            className={styles.toggle}
              defaultChecked={this.state.eggsAreReady}
              aria-label='No label tag'
              icons={false}
              onChange={this.handleEggsChange} />

        <span  className={styles.status} >{  this.state.eggsAreReady ?
<span className={styles.active}>Active</span>

           :
           <span className={styles.inactive}>In Active</span>
         }</span>
         </Col>
         <Col className={styles.details}>
         <p className={styles.name}>ENOSH DAVID</p>
         <p className={styles.design}>Product Manager</p>
         <p className={styles.location}>Bangalore,Karnataka</p>
         </Col>
         <Col className={styles.progress}>
         <CircularProgressbar percentage={60} />
         <span className={styles.updateprofile}>Update Profile</span>
         <p className={styles.mobile}>Mobile no<span className={styles.no}>-7867987698</span></p>
        <p className={styles.email}>Email ID<span className={styles.id}>-shaikfarhana@gmail.com</span></p>

         </Col>
         <p className={styles.hrdivider}></p>

         </Row>
</Card>
<Row className={styles.homesecond}>
<Col xs="8">
<Card  className={styles.about}>
<CardText>
<p  className={styles.paraheadings}>About</p>
<p className={styles.paracontent}>
A positive attitude and specific ideas about the contributions they want to make
 to your company Fair and unbaised candidates who gather information and seek input before making decisions
 Candidates who are consistently available and complete work on time
 Strong communication skills with both coworkers and supervisors(may also extend to vendors,stakeholders, and customers)
</p>
<hr className={styles.breakline}/>
<p className={styles.paraheadings}>Skills</p>
<p className={styles.paracontent}>
<Chips

  value={this.state.chips}
  onChange={this.onChange}
  suggestions={["Java", "Javascript", "html","css","reactjs"]}

/></p>
<hr className={styles.breakline}/>
<p className={styles.paraheadings}>Education</p>
</CardText>


</Card>
</Col>

<Col>
        <Card className={styles.windeedcarousel}>
        </Card>
<div className={styles.windeedjobs}>
<p>
<span className={styles.jobs}>WINDEED JOBS</span>
<span className={styles.viewMore}>VIEW MORE</span>
</p>
<Card className={styles.windeedJob}>

</Card>
<Card className={styles.windeedJob}>
</Card>
</div>
</Col>

</Row>


      </div>
      </div>
    );
  }
}
