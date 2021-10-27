import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Signup/Signup.scss'




class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name: "",
            email: "",
            password: "",
            mobileno : "",
            nameError: false,
            emailError: false,
            passError: false,
            mobileError: false,

       
        }
    }


    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.nameError = this.state.name !=='' ? false : true;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !== ''? false : true;
        errors.mobileError = this.state.mobileno !== '' ? false : true;
      
        this.setState({
            ...errors
        })

        return isError = errors.nameError || errors.emailError || errors.passError || errors.mobileError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
 


    render() {
     
        return (
            <div>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="reg-input">
                            <TextField
            
                                id="FullName"
                                type="text"
                                name="name"
                                label="Full Name"
                                variant="outlined"
                                size="small"
                                error = {this.state.nameError}
                                onChange = {e => this.change(e)}
                                helperText = {this.state.nameError ? "Enter fullName" : ''} 
                       />
                            <TextField
            
                                id="Email"
                                type="text"
                                name="email"
                                label="Email Id"
                                variant="outlined"
                                size="small"
                                error = {this.state.emailError}
                                onChange = {e => this.change(e)}
                                helperText = {this.state.emailError ? "Enter an email" : ''} 
           
                            />
                            <TextField
                     
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                error = {this.state.passError}
                                onChange = { e=> this.change(e)}
                                helperText={this.state.passError ?"Enter a password" : ''}
                         
                            />
                            <TextField
                  
                                id="Mobileno"
                                type="test"
                                name="mobileno"
                                label="Mobile Number"
                                variant="outlined"
                                size="small"
                                error = {this.state.mobileError}
                                onChange = { e=> this.change(e)}
                                helperText={this.state.mobileError ?"Enter a mobile number" : ''}
            
                             
                            />

                        </div>
                        <div className="div-but-content">
                            <Button className="button1" variant="contained"onClick={this.next} >
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