import React from "react";
import {Card,Row,Col,CardText} from "reactstrap";
import styles from "./Layout.css";

export class JobseekerHomepage extends React.Component{
  render(){
    return(
      <div className={styles.container}>
<Card className={styles.profileupdate}>
</Card>
<Row className={styles.homesecond}>
<Col xs="8">
<Card  className={styles.about}>
</Card>
</Col>

<Col xs="4">
        <Card className={styles.windeedcarousel}>
        </Card>
<div className={styles.windeedjobs}>
<p>
<span>Windeed Jobs</span>
<span>View More</span>
</p>
<Card className={styles.windeedJob}>

</Card>
<Card className={styles.windeedJob}>
</Card>
</div>
</Col>

</Row>


      </div>
    );
  }
}
