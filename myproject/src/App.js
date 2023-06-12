
import './App.css';
import React from "react";

import Login from './components/Login';
import Afterlogin from './components/Afterlogin';
import Dailyfood from './components/Dailyfood';
import Ambulance from './components/Ambulance';
import Appointement from './components/Appointement';
import Diseases from './components/Diseases';
import Thoughts from './components/Thoughts';

import Yogasana from './components/Yogasana';

import Pranayama from './components/Pranayama';

import Meditation from './components/Meditation';

import Exercises from './components/Exercises';



import Dailyex from './components/Dailyex';

import {BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App() {
  return (


    <Router>

     <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
      
    <div >

    
  
<Routes>


<Route path="/afterlogin" element={<Afterlogin/>} />
<Route path="/ambulance" element={<Ambulance/>} />
<Route path="/appo" element={<Appointement/>}/>
<Route path="/dailyex" element={<Dailyex/>} />
<Route path="/dailyfood" element={<Dailyfood/>} />
<Route path="/diseases" element={<Diseases/>} />

<Route path="/thoughts" element={<Thoughts/>} />
<Route path="/yoga" element={<Yogasana/>} />

<Route path="/para" element={<Pranayama/>} />

<Route path="/medi" element={<Meditation/>} />

<Route path="/exe" element={<Exercises/>} />


</Routes>


</div>
</Router>







  );
}

export default App;
