import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Login/Login.scss';



export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
                
            email: "",
            password: "",
            emailError: false,
            passError: false,
        }
       
    }

    
    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !== ''? false : true;
      
        this.setState({
            ...errors
        })

        return isError =errors.emailError || errors.passError 
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
            <>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="login-input">
                            <TextField
                           
                                id="userName"
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
                            <div className="pwdchange">
                                <span className="forget">Forget Password?</span>
                            </div>

                        </div>
                        <div className="div-but-content">
                            <Button className="button1" variant="contained" onClick = {this.next}>
                                Login
                            </Button>
                        </div>

                        <span style={{marginTop:'14px'}}>---------- OR ----------</span>
                        <div className="div-buttons">
                            <Button className="button" variant="contained" color="primary">
                                Facebook
                            </Button>
                            <Button className="button" variant="contained" color="red">
                                Google
                            </Button>

                        </div>

                    </form>
                </div>

            </>

        );
    }
}