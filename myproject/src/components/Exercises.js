import React from 'react';







import background from "../data/exer.jpg";
import {Container, Row,Col,Nav,Navbar} from "reactstrap";
import  { ListGroup,ListGroupItem} from "reactstrap";
import Headerr from "./Header"
import {
    
  Link,Routes,Router
  
  
} from "react-router-dom";




const Exercises=()=>{


  return  (

   
   

<div style = {{background: `url(${background})` , width: '100%' , height: '100%',marginTop:'100px'}}>



<div>
       <h2 className="text-center"style={{backgroundColor: "Secondary"}}>VARIOUS EXERCISES </h2><br />
   </div>

<Container 
>




<Row>
<Col md={4}>

<Navbar>
  <Nav>

  <ListGroup>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-warning mb-2" tag="a" to="/yoga" action>Yogasana</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2" tag="a" to="/para" action>Pranayama</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-secondary mb-2" tag="a" to="/exe" action>Exercises</Link>
<Link class="list-group-item px-3 border-0 rounded-3 list-group-item-success mb-2"  tag="a" to="/medi" >Meditation</Link>


</ListGroup>
</Nav>
</Navbar>
</Col>

<Col md={8}>
<div>
 <h1> Exercises </h1>   
</div>


</Col>

</Row>
</Container>





</div>



    );
};
export default Exercises;