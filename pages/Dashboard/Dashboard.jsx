import React, { Component } from 'react'
import cartpic from "../../Assets/Cart_Pic.png"
import "../Dashboard/Dashboard.scss"
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Dashboard extends Component {
 
    
constructor(props) {
    super(props)

    this.state = {

      
            open: true,
            opensign:false
        
         
    }
}




login = () => {
    this.setState({
        open: true,
        opensign: false
    })
}

signUp = () => {
    this.setState({
        open: false,
        opensign: true
    })
}

    
    render() {
        return (
            <div className="main_display">
                <div className="cart-display">
                    <div className="img_cart">
                    <img alt="" src={cartpic}></img>
                    <span style={{ marginTop: '16px' }}>ONLINE BOOK SHOPPING</span>
                    </div>
                </div>
                <div className="user_content">
                    <div className="heading">
                    <Link className="link" style={{color:this.state.open ? 'black' : 'grey'}} to={`/dashboard`} >
                            <span style={{color:this.state.open?'black':'grey', textDecoration:this.state.open?'underline': 'none', textDecorationColor:this.state.open?'maroon':'white'}}
                                onClick={this.login} className="btn active1">LOGIN </span>
                    </Link>
                    <Link className="link" style={{color:this.state.opensign ? 'black' : 'grey'}} to={'/dashboard/signup'} >
                            <span style={{color:this.state.opensign ? 'black' : 'grey', textDecoration:this.state.opensign?'underline': 'none', textDecorationColor:this.state.opensign?'maroon':'white'}} 
                                onClick={this.signUp} className="btn active2">SIGNUP </span>
                        </Link>
                    </div>
                    <div className="box">
                    <Switch>
                            <Route exact path="/dashboard" component={Login} />
                            <Route exact path="/dashboard/signup" component={Signup} />      
                </Switch>
            
                    </div>
                </div>
               
            </div>
            
        )
    }
}

export default Dashboard
