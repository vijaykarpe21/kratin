import React from 'react';
import {button, useState} from 'react';
import {label} from 'react'
import { useNavigate, Link,} from 'react-router-dom';
import Afterlogin from './Afterlogin';




 import background from "../data/young.jpg";
import { Container } from 'reactstrap';

const Login = () => {

    let navigate=useNavigate;

    const submitform= () =>{
        navigate('/Afterlogin');

    }
  
    return (
 <Container >
     <link href="/"/>
     
         <div style = {{background: `url(${background})` , width: '100%' , height: '100%'}}>
      
          <div style={{ backgroundColor: 'white', width: '50%', height: '50%', marginTop: '8%', marginLeft: '25%', marginRight: '25%', opacity: 0.8 }}>
              <div>
                  <div className="col-md-12 login-sec">
                      <form><br />
                          <h3 className="text-center">Sign In</h3>
                          <div className="form-group">
                              <label>UserName</label>
                              <input type="text" name="email" className="form-control" placeholder="Enter User Name"  />
                          </div>
                          <div className="form-group">
                              <label>DOB</label>
                              <input type="date" name="password" className="form-control" placeholder="Enter DOB"  />
                          </div><br />
                          
                              <div className="btn-group" role="group" aria-label="Basic example">
                              <button type="button"  className="btn btn-secondary btn-block">
                              <Link inputtype="button" className="btn btn-secondary btn-block" to="/afterlogin">Login</Link>
                               </button>
                               </div><span style={{ margin: '70px' }}></span>
                
                              <div className="btn-group" role="group" aria-label="Basic example">
                              <button type="button"  className="btn btn-secondary btn-block">
                              <Link inputtype="button" className="btn btn-secondary btn-block" to="/">Cancel</Link>
                                 </button> 
                              </div><span style={{ margin: '70px' }}></span>
                

                          <br /><br />
                      </form>
                  </div>
              </div>
              
          
          
      </div><br /><br /><br />
  </div >
 
  </Container>
 
    );
  };

  export default Login