import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Login/Login.scss';
import UserService from '../../services/user_services';
import { Snackbar, IconButton } from '@mui/material';


const obj = new UserService();



export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
                
            email: "",
            password: "",
            emailError: false,
            passError: false,
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

            let Data = {
                "email": this.state.email,
                "password": this.state.password,
            }
            console.log(Data);
            obj.login(Data).then((response)=> {
                console.log(response);
                localStorage.setItem("token", response.data.id);
                this.setState({snackbaropen:true, snackbarmsg: "Login Successfull!"})
                var timer  = setTimeout(function(){
                    window.location = '/BooksDashboard'
                }, 2000);
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Login Failed!"})
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

            </div>

        );
    }
}