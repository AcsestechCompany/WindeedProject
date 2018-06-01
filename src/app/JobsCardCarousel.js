import React from "react";
import {JobsCard} from "./JobsCard";
import styles1 from "./Styling.css";
import {Row,Col} from "reactstrap";
import {Icon} from "react-icons-kit";

import {thinLeft,thinRight} from 'react-icons-kit/entypo/';

export class JobsCardCarousel extends React.Component{
  render(){
    return(

            <div id="carouselExampleIndicators" class="carousel slide" >


            <div class="carousel-inner">
              <div class="carousel-item active">
              <Row className={styles1.jobscardrow}>

              <JobsCard
              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}
              />


              <JobsCard
              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}/>

              <JobsCard

              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}/>
              <JobsCard

              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}/>

              </Row>
                </div>

              <div class="carousel-item">
              <Row className={styles1.jobscardrow}>

              <JobsCard
              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}

              />

              <JobsCard

              card1heading={' UI Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}/>

              <JobsCard

              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}/>

              <JobsCard

              card1heading={'Front End Web Developer'}
              location={'Bangalore,Karnataka,India'}
              jobtype={'Permanent'}
              exp={'3-5 Years'}
              postedon={'April 27,2018'}/>


              </Row>
            </div>
              </div>


            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

              <Icon icon={thinLeft} className={styles1.lefticon} size={50}/>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">


            <Icon icon={thinRight} className={styles1.righticon} size={50}/>

              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
    );
  }
}
