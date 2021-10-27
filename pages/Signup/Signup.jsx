import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Signup/Signup.scss'
import UserService from '../../services/user_services';
import { Snackbar, IconButton } from '@mui/material';

const obj = new UserService();




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
            snackbaropen: false, 
            snackbarmsg: "",

       
        }
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };


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
        

        let signupObj = {
            "fullName": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "phone": this.state.mobileno,
        }
        console.log(signupObj);
        obj.signup(signupObj).then((response)=> {
            console.log(response);
            localStorage.setItem("token", response.data.id);
            this.setState({snackbaropen:true, snackbarmsg: "Registered Successfully!"})
        }).catch((error)=>{
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Registration Failed!"})
        })
    }  else {
        this.setState({snackbaropen:true, snackbarmsg: "Please enter data!"})
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
                 <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />
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