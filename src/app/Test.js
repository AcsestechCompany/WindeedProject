import React from 'react';
import {JobDescriptionCard} from "./JobDescriptionCard";


export class Test extends React.Component {


  render() {

    return (
      <div>
<JobDescriptionCard
card1heading={'Web Developer'}
location={'Bangalore,Karnataka,India'}
jobtype={'contract'}
exp={'0-2 Years'}
postedon={' May 15 2018'}
card1heading={'Front End Web Developer'}
location={'Bangalore,Karnataka,India'}
jobtype={'Permanent'}
exp={'3-5 Years'}
postedon={'Posted On - April 27,2018'}
compname={' Acsestech Consulting Services Pvt Ltd'}
skilname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
jobdescname={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
aboutcompany={'JPMorgan Chase is a leader in financial services,offering solutions to clients in more than 100 countries with one of the most comprehensive global product platforms available.We have been helping our clients to do business and manage their wealth for more than 200 years. Our business has been built upon our core principle of putting our clients interests first.'}
jobdescription={''}
rolesresponsibilities={''}
prefferedprofile={''}



/>
        </div>
    );
  }
}
