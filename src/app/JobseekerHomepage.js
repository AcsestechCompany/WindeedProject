import React from "react";
import {Card,Row,Col,CardText} from "reactstrap";
import styles from "./Layout.css";
import {JobseekerHeader} from "./JobseekerHeader";
import Toggle from "react-toggle";
import Chips, { Chip } from "react-chips";
import CircularProgressbar from "react-circular-progressbar";
import {WindeedCarousel} from "./WindeedCarousel";

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
         <p className={styles.mobile}>Mobile - <span className={styles.no}>7867987698</span></p>
        <p className={styles.email}>Email ID - <span className={styles.id}>farhana@gmail.com</span></p>

         </Col>
         <Col className={styles.col3}>

         <p >
<span className={styles.headtxt}>Availability - </span>
<span className={styles.txt}>Full Time (less than 15 days)</span>
         </p>
         <p className={styles.spacing2}>
<span className={styles.headtxt}>Prefered Location - </span>
<span className={styles.txt}>Hyderabad</span>
         </p>
         <p className={styles.spacing3}>
<span className={styles.headtxt}>Experience - </span>
<span className={styles.txt}>10 Years</span>
         </p>
         <p className={styles.file}>
         <input type="file" className={styles.file} class="hidden"/>
       </p>
         </Col>
         <Col className={styles.col4}>
    <p className={styles.edit}>edit</p>
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
<span className={styles.skills}>UI</span>
<span className={styles.skills}>HTML</span>
<span className={styles.skills}>CSS</span>
</p>
<hr className={styles.breakline}/>
<p className={styles.paraheadings}>Education</p><br/>
<p className={styles.paracontent}>
<span className={styles.contentHeading}>B.E/B.Tech - </span>
<span className={styles.contentHeading}> Computers</span><br/>
<span>Muffakham Jah College of Engineering and Technology</span>
<p> 2013 (Full Time)</p>
</p>
<p className={styles.paracontent}>
<span className={styles.contentHeading}>Intermediate </span><br/>

<span>State Board - English</span>
<p>2009</p>
</p>
<p className={styles.paracontent}>
<span className={styles.contentHeading}>SSC </span><br/>
<span>State Board - English</span>
<p>2007</p>
</p>

<hr className={styles.breakline}/>
<div className={styles.paraheadings}>Work Experience</div><br/>
<p className={styles.paracontent}><br/>
<span className={styles.contentHeading}>Designation @ Company Name</span><br/>
<span> Experience(From - To)</span><br/>
<span>Notice Period</span><br/>
<span>Job Description</span>
</p>
<hr className={styles.breakline}/>
<p className={styles.paraheadings}>Job Preferences</p>
<p className={styles.paracontent}><br/>

<span className={styles.contentHeading}>Job Type - </span>
<span >Permanent/Contract</span><br/>


<span className={styles.contentHeading}>Expected Salary - </span>
<span>min-max</span><br/>


<span className={styles.contentHeading}>Preferred Location - </span>
<span>Hyderabad / Bangalore</span><br/>

<p>
<span></span>
<span></span>
</p>
</p>

</CardText>


</Card>
</Col>

<Col>
        <Card className={styles.windeedcarousel}>
        <img src={require('./windeedlogo.png')} className={styles.windeedlogo}/>
        <WindeedCarousel/>
        <p className={styles.learnMore}>LEARN MORE</p>
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
