import React from 'react';







import background from "../data/happy.jpg";
import {Container, Row,Col,Nav,Navbar} from "reactstrap";
import  { ListGroup,ListGroupItem} from "reactstrap";
import Headerr from "./Header"
import {
    
  Link,Routes,Router
  
  
} from "react-router-dom";




const Thoughts=()=>{


  return  (

   
   

<div style = {{background: `url(${background})` , width: '100%' , height: '100%',marginTop:'50px'}}>



<div>
       <h1 style={{backgroundColor: "Secondary"}}>HAPPY THOUGHTS </h1><br />
   </div>

<h3>

“The longer I live the more beautiful life becomes.”  ~ Frank Lloyd Wright
</h3>
<br/>
<h3>“For the unlearned, old age is winter; for the learned, it is the season of the harvest.”   ~Hasidic saying</h3>
<br/>
<h3>“One of the reasons people get old—lose their aliveness—is that they get weighed down by all of their stuff.” ~Richard Leider</h3>
<br/>
<h3>“Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.” ~Mark Twain</h3>
<br/>
<h3>“I suppose real old age begins when one looks backward rather than forward.” ~ Mary Sarton</h3>
<br/>
<h3>“Age is no barrier. It’s a limitation you put on your mind.” ~Jackie Joyner-Kersee</h3>
<br/>

<h3>“Your 40s are good.  Your 50s are great.  Your 60s are fab.  And 70 is f*@king awesome!”  ~Helen Mirren</h3>
<br/>
<h3>“Anyone who keeps the ability to see beauty never grows old.” ~Franz Kafka</h3>
<br/>
</div>



    );
};
export default Thoughts;
