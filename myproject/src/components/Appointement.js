import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'reactstrap';
import background from "../data/young.jpg";


function Appointement(

) {
    return (

        <div style = {{background: `url(${background})` , width: '100%' , height: '100%',marginTop:'50px'}}>
        <div className="container-fluid">
            
            <div style={{ backgroundColor: 'white', width: '70%', height: '50%', marginTop: '3%', marginLeft: '15%', marginRight: '15%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec">
                    <form><br />
                    <div >
                        <h4 className="text-center"style={{backgroundColor: "Secondary"}}>APPOINTEMENT BOOKING </h4><br />
                        </div>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" name="firstName" required className="form-control" placeholder="Enter First Name"  />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName"  className="form-control" placeholder="Enter Last Name"  />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" required className="form-control" placeholder="Enter Email"  />
                            <span style={{ fontWeight: 'normal', color: 'red', }}></span>
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="Date" name="dob" className="form-control" placeholder="Enter Birthdate" min={"1931-01-01"}  />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" placeholder="Enter Address"  />
                        </div>

                        <div className="form-group">
                            <label>Spouse Name</label>
                            <input type="text" name="address" className="form-control" placeholder=" Enter Spouse Name"  />
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" name="contact" className="form-control" placeholder="Enter Contact"   />
                            <span style={{ fontWeight: 'normal', color: 'red', }}></span>

                        </div>
                        <div className="form-group">
                            <label>Hospital Name</label>
                            <input type="text" name="contact" className="form-control" placeholder="Enter Hospital Name"   />
                            <span style={{ fontWeight: 'normal', color: 'red', }}></span>

                        </div>
                        <div className="form-group">
                            <label>Doctor' Name</label>
                            <input type="text" name="contact" className="form-control" placeholder="Enter Doctor's Name"   />
                            <span style={{ fontWeight: 'normal', color: 'red', }}></span>

                        </div>
                        
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <input type="submit" className="btn btn-primary btn-block" value="Submit"  />
                        </div><span style={{ margin: '10px' }}></span>
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

  export default Appointement;
  