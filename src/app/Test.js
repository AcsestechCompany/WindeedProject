import React from 'react';
import {JobCard} from "./JobCard";


export class Test extends React.Component {


  render() {

    return (
      <div>

      <JobCard
      card1heading={'Front End Web Developer'}
      location={'Bangalore,Karnataka,India'}
      jobtype={'Permanent'}
      exp={'3-5 Years'}
      postedon={'Posted On - April 27,2018'}
      companyname={' Acsestech Consulting Services Pvt Ltd'}
      skillsname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
      JDD={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
      />
        </div>
    );
  }
}
