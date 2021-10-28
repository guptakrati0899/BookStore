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
         
    }
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
                    <Link id="highlight"style={{textDecoration:"none",color:"black", }} to={'/Login'} >
                        <span className="head">LOGIN </span>
                        </Link>
                        <Link style={{textDecoration:"none",color:"black"}} to={'/Signup'} >
                        <span className="head">SIGNUP </span>
                        </Link>
                    </div>
                    <div className="box">
                    <Switch>
                            <Route exact path="/Login" component={Login} />
                            <Route exact path="/Signup" component={Signup} />      
                        </Switch>
            
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
