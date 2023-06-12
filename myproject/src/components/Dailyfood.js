import React from 'react';







import background from "../data/young.jpg";
import {Container, Row,Col,Nav,Navbar} from "reactstrap";
import  { ListGroup,ListGroupItem} from "reactstrap";
import Headerr from "./Header"
import {
    
  Link,Routes,Router
  
  
} from "react-router-dom";




const Dailyfood=()=>{


  return  (

   
   

<div style = {{background: `url(${background})` , width: '100%' , height: '100%',marginTop:'100px'}}>



<div>
       <h1 className="text-center"style={{backgroundColor: "Secondary"}}>HEALTHY FOOD</h1><br />
   </div>

   <h1> 1.Beans</h1>
There is numerous research about beans and how healthy they are. Research shows that the proper consumption of beans (for example, lentils beans 3/4 cup) can even decrease LDL (better known as cholesterol) by 5%.
Other than this, it lowers A1c by 0.5% which is an excellent indicator of blood sugar control.
Beans
<h1> 2.Oates</h1>
Once we reach the age of 50, the risk of heart disease increases drastically. So, importing foods that positively affect cholesterol is important.
Oats are just the perfect choice. At least three grams of oats daily, and you will reduce cholesterol levels drastically (up to 10%).
Needless to say, this greatly reduces the risk of heart disease.
oats
<h1>3.Apples</h1>
Seems like our parents were right.
On average, apples have five grams of heart-healthy fiber. What does this do? Well, apart from keeping your ticker in a good shape, it lowers LDL cholesterol and helps support a healthier way of life.
Apples are an absolute must-use food for over 50.
apples
There is excellent research showing that an apple a day keeps type 2 diabetes away.



<h1>4.Nuts</h1>
Nuts have been proven to be not only a great aphrodisiac but also work as a heart disease decreaser. They lower the risk of heart disease by 28%.
Now, you don’t need to buy the most expensive nuts. Simple peanuts will do the job, and they are almost two times cheaper than any other tree nuts.
nuts
<h1>5s.Berries</h1>
Berries are great brain-boosting food.
Every single fruit from the berries family contains phytochemicals. These chemicals help boost blood flow and reduce age-related memory decline.



<h1>6.Yogurt</h1>
As our body grows old, our bones become more fragile. Apart from calcium, which helps keep our bones strong, yogurt supplies us with a high dose of great-quality protein.

Yogurt also contains beneficial bacteria that help us nourish the gut. Simply put, yogurt is a must-use food for women over 50 and men over 70.

<h1>7.Leafy Greens</h1>
Leafy greens are not the most delicious food out there. But it’s a fact that this food over 50 is one of the healthiest that you can give to your body.

Leafy greens help keep your mind sharp, increase your brainpower, and keep your body in great form.


</div>

    );
};
export default Dailyfood;