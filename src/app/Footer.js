import React from "react";
import styles1 from "./Styling.css";
import {Form,Input,Row} from "reactstrap";
import {footerinput} from "./Styling.css";

export class Footer extends React.Component{
  render(){
    return(
      <Row className={styles1.footerstyle}>

  Copy rights @ 2018 Windeed
<Input type="email" className={footerinput} name="email" id="exampleEmail"
placeholder="enter your email id to get jo alerts " />
  <button type="button" class="btn btn-primary" id={styles1.subsc}>SUBSCRIBE</button>
  <span className={styles1.contactus}>Contact Us</span>
      </Row>
    );
  }
}
