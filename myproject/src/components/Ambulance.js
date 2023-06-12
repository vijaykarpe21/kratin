import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'reactstrap';
import background from "../data/young.jpg";


function Ambulance(

) {
    return (

        <div style = {{background: `url(${background})` , width: '100%' , height: '100%',marginTop:'70px'}}>
        <div className="container-fluid">
            
            <div style={{ backgroundColor: 'white', width: '70%', height: '50%', marginTop: '3%', marginLeft: '15%', marginRight: '15%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec">
                    <form><br />
                    <div >
                        <h4 className="text-center"style={{backgroundColor: "Secondary"}}>AMBULANCE BOOKING </h4><br />
                        </div>
                        <div className="form-group">
                            <label>Patient Name:</label>
                            <input type="text" name="firstName" required className="form-control" placeholder="Enter Patient Name"  />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="lastName"  className="form-control" placeholder="Enter  Name"  />
                        </div>
                    
                    
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" placeholder="Enter Address"  />
                        </div>

                        
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" name="contact" className="form-control" placeholder="Enter Contact"   />
                            <span style={{ fontWeight: 'normal', color: 'red', }}></span>

                        </div>
                        
                       
                        
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary btn-block" >Book</button>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary btn-block" >Cancel</button>
                        </div>
                        <br /><br /><br />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

  export default Ambulance;
  