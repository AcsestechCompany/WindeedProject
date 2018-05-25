import React from "react";
import styles from "./Layout.css";
import Dropdown from "react-dropdown";
import Toggle from "react-toggle";
import {Login} from "./Login";
import {Icon} from "react-icons-kit";
import {thinDown} from 'react-icons-kit/entypo/thinDown';
const firstOptions = [
  { key: 0, value: 'default', text: '--Select an Option--' },
  { key: 1, value: 'option1', text: 'option1 - when I am selected another shall appear' },
  { key: 2, value: 'option2', text: 'option2' },
  { key: 3, value: 'option3', text: 'option3' },
];




export class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    eggsAreReady:false,

    };
  }
handleEggsChange = (event) => {
    this.setState({eggsAreReady: event.target.checked});
}


  render(){


        return (
          <div style={{ marginTop: '50px', marginLeft: '50px' }}>


            <Toggle
              defaultChecked={this.state.eggsAreReady}
              aria-label='No label tag'
              icons={false}
              onChange={this.handleEggsChange} />

        <span  className={styles.status} >{  this.state.eggsAreReady ?
<span className={styles.active}>Active</span>

           :
           <span className={styles.inactive}>In Active</span>
         }</span>




          </div>
    );
  }
}
