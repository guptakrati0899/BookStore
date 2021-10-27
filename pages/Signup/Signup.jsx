import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Signup/Signup.scss'




class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }
    
 


    render() {
     
        let styles = {
            helperText: {

                color: 'red',
                fontWeight: 'bold',
                fontSize: '.8em',
                marginLeft: '1px',
            }
        }
        return (
            <div>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="reg-input">
                            <TextField
            
                                id="FullName"
                                type="text"
                                name="fName"
                                label="Full Name"
                                variant="outlined"
                                size="small"
                       />
                            <TextField
            
                                id="Email"
                                type="text"
                                name="fName"
                                label="Email Id"
                                variant="outlined"
                                size="small"
           
                            />
                            <TextField
                     
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                         
                            />
                            <TextField
                  
                                id="Mobileno"
                                type="test"
                                name="Mobileno"
                                label="Mobile Number"
                                variant="outlined"
                                size="small"
            
                             
                            />

                        </div>
                        <div className="div-but-content">
                            <Button className="button1" variant="contained"  >
                                Signup
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}

export default Signup;