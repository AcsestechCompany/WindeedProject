import React from "react";
import {JobseekerHeader} from "./JobseekerHeader";
import {JobDescriptionCard} from "./JobDescriptionCard";
import {JobsCardCarousel} from "./JobsCardCarousel";
import {Footer} from "./Footer";
import styles1 from "./Styling.css";
function Blog(props) {
  const content = props.posts.map(
    (post) =>
    <div key={post.id}>
<span className={styles1.title}>  {post.title} </span>

   - {post.content}
    </div>
  );

  return (
    <p>  {content} </p>
  );
}

export class JobDescription  extends React.Component{
  render(){
    const posts = [
      {id: 1,content: 'Resource planning and sourcing from the business'},
      {id: 2,content: 'Ensuring documentation and reporting standards are met and that appropriate scope management amd change control is in place'},
      {id: 3,content: 'Resource planning and sourcing from the business'},
      {id: 4,content: 'Building of strong relationships across GSS and Key stakeholders'},
      {id: 5,content: 'Indirect staff management for all resources assigned to projects'}
    ];
    const posts1 = [
      {id: 1,content: 'Resource planning and sourcing from the business'},
      {id: 2,content: 'Ensuring documentation and reporting standards are met and that appropriate scope management amd change control is in place'},
      {id: 3,content: 'Resource planning and sourcing from the business'},
      {id: 4,content: 'Building of strong relationships across GSS and Key stakeholders'}
    ];
    const posts2 = [
      {id: 1,title: 'Experience', content: '4-5 years'},
      {id: 2,title: 'Role Category',content: 'Project Management'},
      {id: 3,title: 'Employment Type',content: 'Contract'},
      {id: 4,title: 'Notice Period',content: 'able to join within 5 days'}
    ];
    return(
      <div>
      <JobseekerHeader/>
      <JobDescriptionCard
card1heading={'Front End Web Developer'}
location={'Bangalore,Karnataka,India'}
jobtype={'Permanent'}
exp={'3-5 Years'}
postedon={'April 27,2018'}
compname={' Acsestech Consulting Services Pvt Ltd'}
skilname={' Javascript,JQuery,CSS,HTML,Angularjs,Design Patterns,Web applications'}
jobdescname={' Strong hands on experience in JavaScript,OOPS with good experience in frameworks like Angular or React Must Good experience in HTML, CSS ,application security and performance concepts. Should able to understand the internal of the frame work....' }
aboutcompany={'JPMorgan Chase is a leader in financial services,offering solutions to clients in more than 100 countries with one of the most comprehensive global product platforms available.We have been helping our clients to do business and manage their wealth for more than 200 years. Our business has been built upon our core principle of putting our clients interests first.'}
jobdescription={ <Blog posts={posts} />}
rolesresponsibilities={<Blog posts={posts1} />}
prefferedprofile={<Blog posts={posts2}/>}
/>
<JobsCardCarousel/>
<Footer/>
        </div>
    );
  }
}
