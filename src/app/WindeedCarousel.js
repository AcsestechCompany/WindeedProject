import React from "react";
import styles from "./Layout.css";

export class WindeedCarousel extends React.Component{
render(){
  return(
            <div className={styles.carouseldiv}>

          <div id="carouselExampleIndicators" class="carousel slide" >
            <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" >1</li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1">2</li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2">3</li>
      </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img  src={require('./background1.jpg')} className={styles.carouselimg} />
                <div class="carousel-caption d-none d-md-block" id={styles.transbox}>
         <h5>Can search and apply to Jobs easily</h5>
         <p>Your career starts here!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img  src={require('./background2.jpg')}  className={styles.carouselimg}/>
                <div class="carousel-caption d-none d-md-block " id={styles.transbox}>
         <h5>To get more visibility on your profile, take our Online Test to know Windeed Rank</h5>
         <p>Your career starts here!</p>
       </div>
              </div>
              <div class="carousel-item">
                <img  src={require('./background3.jpg')} className={styles.carouselimg}/>
                <div class="carousel-caption d-none d-md-block " id={styles.transbox}>
          <h5>Get in touch with the recruiters</h5>
          <p>Your career starts here!</p>
          </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          </div>
  );
}
}
