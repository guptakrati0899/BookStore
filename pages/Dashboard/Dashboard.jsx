import React, { Component } from 'react'
import cartpic from "../Dashboard/Cart_Pic.png"
import "../Dashboard/Dashboard.scss"
import Signup from '../Signup/Signup';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Dashboard extends Component {
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
                        <span className="head">LOGIN </span>
                        <Link style={{textDecoration:"none",color:"black"}} to={`/Dashboard/SignUp`} >
                        <span className="head">SIGNUP </span>
                        </Link>
                    </div>
                    <div className="box">
                    <Switch>
                           
                            <Route exact path="/Dashboard/SignUp" component={Signup} />
                        </Switch>
            
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
