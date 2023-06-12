import React from 'react';







import background from "../data/young.jpg";
import {Container, Row,Col,Nav} from "reactstrap";
import  { ListGroup,ListGroupItem} from "reactstrap";
import Headerr from "./Header"
import {
    
  Link,Routes,Router
  
  
} from "react-router-dom";




const Afterlogin =()=>{


  return  (

   
   

<div style = {{background: `url(${background})` , width: '100%' , height: '100%',marginTop:'100px'}}>




<Container className ="text-center">


<Headerr/>

<Row>
<Col md={4}>

  <Nav>

  <ListGroup>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-warning mb-2" tag="a" to="/appo" action>Doctor's Appointment</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2" tag="a" to="/ambulance" action>Ambulance Booking</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-secondary mb-2" tag="a" to="/diseases" action>Diseases Information</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-success mb-2"  tag="a" to="/dailyex" >Daily Exercises</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-danger mb-2" tag="a" to="/dailyfood" action>Daily Food</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group" tag="a" to="/thoughts" action>Happy Thoughts</Link>

</ListGroup>
</Nav>
</Col>

<Col md={8}>


  

</Col>

</Row>
</Container>





</div>



    );
};
export default Afterlogin
