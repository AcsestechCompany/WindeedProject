import React from "react";
import {JobseekerHeader} from "./JobseekerHeader";
import styles from "./Layout.css";
import {profileinput,formstylejoblist} from "./Styling.css";
import styles1 from "./Styling.css";
import {Row,Col,Card,CardText,Form,FormGroup,Input} from "reactstrap";
import {JobCard} from "./JobCard";
import {Footer} from "./Footer";
import {thinDown} from 'react-icons-kit/entypo/thinDown';
import {Icon} from "react-icons-kit";
import {JobListDropdownRow} from "./JobListDropdownRow";

export class JobList extends React.Component{
  render(){
    return(

      <div >
 <JobseekerHeader/>
 <div className={styles1.pagecontainer}>
 <Form inline className={formstylejoblist}>
       <FormGroup className="mr-sm-5 mb-5">

         <Input type="text" name="email" id="exampleEmail" placeholder="job Title, Skills, Keywords" className={profileinput} />
       </FormGroup>
       <FormGroup className="mr-sm-5 mb-5">

         <Input type="text" name="password" id="examplePassword" placeholder="Location" className={profileinput} />
       </FormGroup>
       <FormGroup className="mb-5">
<button type="button" class="btn btn-sm btn-outline-primary" id={styles1.search}>SEARCH</button>
</FormGroup>
     </Form>

<JobListDropdownRow/>






 <JobCard
 card1heading={'Front End Web Developer'}
 location={'Bangalore,Karnataka,India'}
 jobtype={'Permanent'}
 exp={'3-5 Years'}
 postedon={'April 27,2018'}
 companyname={' Acsestech Consulting Services Pvt Ltd'}
 skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
 JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }

 />
 <JobCard
 card1heading={' Web Developer'}
 location={'Hyderabad,Telangana,India'}
 jobtype={'contract'}
 exp={'0-1 Years'}
 postedon={'Jun 01,2018'}
 companyname={' Acsestech Consulting Services Pvt Ltd'}
 skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
 JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
 />
 <JobCard
 card1heading={' Web Developer'}
 location={'Hyderabad,Telangana,India'}
 jobtype={'contract'}
 exp={'0-1 Years'}
 postedon={'Jun 01,2018'}
 companyname={' Acsestech Consulting Services Pvt Ltd'}
 skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
 JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
 />
 <JobCard
 card1heading={' Web Developer'}
 location={'Hyderabad,Telangana,India'}
 jobtype={'contract'}
 exp={'0-1 Years'}
 postedon={'Jun 01,2018'}
 companyname={' Acsestech Consulting Services Pvt Ltd'}
 skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
 JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
 />
 <JobCard
 card1heading={' Web Developer'}
 location={'Hyderabad,Telangana,India'}
 jobtype={'contract'}
 exp={'0-1 Years'}
 postedon={'Jun 01,2018'}
 companyname={' Acsestech Consulting Services Pvt Ltd'}
 skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
 JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
 />





      </div>
<Footer/>
      </div>
    );
  }
}
