import React from "react";
import {JobseekerHeader} from "./JobseekerHeader";
import { Form, FormGroup, Input,Label,Col,Row
} from 'reactstrap';

import {forminput1,formstyle1,profileinput} from "./Styling.css";
import styles1 from "./Styling.css";

export class MyProfile extends React.Component{
  render(){
    return(
      <div>
<JobseekerHeader/>
       <div className={styles1.pagecontainer}>
       <Row>
      <Col xs="9">
<p className={styles1.profileHeading}>PROFILE</p>
<Form className={formstyle1}>
        <FormGroup row>
        <Col sm={4}>
            <Input type="text" name="email" id="firstname" placeholder="First Name" className={profileinput} />
          </Col>

         <Col sm={4}>
            <Input type="text" name="password" id="lastname" placeholder="Last Name"  className={profileinput}/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={4}>
            <Input type="email" name="email" id="emailid" placeholder="Enter Your Email Id" className={profileinput}/>
          </Col>

         <Col sm={4}>
            <Input type="text" name="password" id="phoneno" placeholder="Phone No"  className={profileinput}/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={4}>
        <button type="button" class="btn btn-sm btn-outline-primary" id={styles1.btnsave}>SAVE</button>
        </Col>
        </FormGroup>
</Form>
<p className={styles1.profileHeading}>CHANGE PASSWORD</p>
<Form className={formstyle1}>
        <FormGroup row>
        <Col sm={4}>
            <Input type="text" name="email" id="oldpassword" placeholder="Old Password" className={profileinput} />
          </Col>
  </FormGroup>
    <FormGroup row>
         <Col sm={4}>
            <Input type="text" name="password" id="newpassword" placeholder="New Password" className={profileinput} />
          </Col>
  </FormGroup>
    <FormGroup row>
         <Col sm={4}>
            <Input type="text" name="password" id="confirmpassword" placeholder="Confirm Password"  className={profileinput}/>

          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={4}>
                <button type="button" class="btn btn-outline-primary" id={styles1.btnsave}>SAVE</button>
                </Col>
                </FormGroup>
</Form>
</Col>
<Col xs="3">
 <img src={require('./profilepic1.png')} className={styles1.profileimg}/>
 <p className={styles1.updateprofile}> Update Profile Picture</p>
</Col>
</Row>
       </div>

       </div>
    );
  }
}
