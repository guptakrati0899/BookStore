import React, { Component } from 'react'
import Header from '../Header/Header'
import "../Cart/Cart.scss"
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer'
import TextField from '@material-ui/core/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Image from "../../Assets/bookimage.png"
import { Link } from 'react-router-dom';




const styles = (theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'black',
      },
});



export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            open: false,
            openContent: false,
            Name : "",
            Number : "",
            PinCode : "",
            Locality:"",
            Address: "",
            City: "",
            State:"",
            nameError: false,
            numberError:false,
            pinError:false,
            locError:false,
            addError:false,
            cityError:false,
            stateError:false,




           
          
        }
    }


      
    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.nameError= this.state.Name !=='' ? false : true;
        errors.numberError= this.state.Number !=='' ? false : true;
        errors.cityError= this.state.City !=='' ? false : true;
        errors.pinError= this.state.PinCode !=='' ? false : true;
        errors.addError= this.state.Address !=='' ? false : true;
        errors.locError= this.state.Locality !=='' ? false : true;
        errors.stateError= this.state.State !=='' ? false : true;
      
        this.setState({
            ...errors
        })

        return isError =errors.nameError || errors.numberError || errors.pinError || errors.addError || errors.locError || errors.stateError || errors.cityError 
    }

   

   
      
       


    handleClick = () => {
        this.setState({ open: true });
    }

    handleContinue = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
            this.setState({ openContent: true });

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
                <Header/>
                <div className="CartBag-frame">
                    <div className="cartBag-content">
                        <div >My Cart</div>
                        <div className="img-content">
                        <img className="img-book" src={Image} alt="" />
                  
                    <div className="text-content">
                                <div className="bag-text">
                                    <div className="cart-title">Don't Make Me Think</div>
                                    <div className="cart-bookAuthor">by Steve Kurg</div>
                                    <div className="price">Rs. 1500</div>
                                </div>
                                <div className="count-content">
                                    <div className="minus">-</div>
                                    <div className="count">1</div>
                                    <div className="plus">+</div>
                                    <div className="remove">Remove</div>
                                </div>
                            </div>
                            </div>
                        <div className="btn-content">
                            <Button variant="contained" className="btn-place"  onClick={this.handleClick} >
                                Place Order
                            </Button>
                        </div>
                    </div>
              
            </div>
            {this.state.open ?
                        <div className="address-frame-details">
                            <div className="details">
                            <div className="customer-dtl">
                                <div className="header-detail">Customer Details</div>
                                <div className="dtl-btn">Edit</div>
                            </div>
                            <div className="custm-content-names">

                                <div className="city">
                                    <div><TextField
                                      
                                        size="small"
                                        label="FullName"
                                        type="text"
                                        name="Name"
                                        variant="outlined"
                                        error = {this.state.nameError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.nameError ? "Enter a Name" : ''} 
                                        
                                    />
                                    </div>
                                </div>
                                <div className="state">
                                    <div><TextField
                                      
                                        size="small"
                                        label="Phone Number"
                                        type="text"
                                        name="Number"
                                        variant="outlined"
                                        error = {this.state.numberError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.numberError ? "Enter a Number" : ''} 
                                        
                                      
                                    /></div>
                                </div>
                            </div>
                            <div className="custm-content-names">
                                <div className="InputFields">
                                    <TextField
                                     
                                        size="small"
                                        label="PinCode"
                                        type="text"
                                        name="PinCode"
                                        variant="outlined"
                                        error = {this.state.pinError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.pinError ? "Enter a Pincode" : ''} 
                                        
                                       
                                    />
                                </div>
                                <div className="InputFields">
                                    <TextField
                                       
                                        size="small"
                                        label="Locality"
                                        type="text"
                                        name="Locality"
                                        variant="outlined"
                                        error = {this.state.locError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.locError ? "Enter a Locality" : ''} 
                                      
                                    />
                                </div>
                            </div>

                            <div className="address-feild"><TextField
                               
                                label="Address"
                                type="text"
                                name="Address"
                                variant="outlined"
                                size="large"
                                error = {this.state.addError}
                                onChange = {e => this.change(e)}
                                helperText = {this.state.addError ? "Enter an Address" : ''} 
                            
                                fullWidth
                              
                            /></div>


                            <div className="city-state">
                                <div className="city">
                                    <div><TextField
                                     
                                        size="small"
                                        label="City/Town"
                                        type="text"
                                        name="City"
                                        variant="outlined"
                                        error = {this.state.cityError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.cityError ? "Enter a City/Town" : ''} 
                                       /></div>
                                </div>
                                <div className="state">
                                    <div><TextField
                                        
                                        size="small"
                                        label="LandMark"
                                        type="text"
                                        name="State"
                                        variant="outlined"
                                        error = {this.state.stateError}
                                        onChange = {e => this.change(e)}
                                        helperText = {this.state.stateError ? "Enter a LandMark" : ''} 
                                        
                                    /></div>
                                </div>
                            </div>
                            <div className="heading0">
                                <div className="work ">Type</div>
                            </div>
                            <div className="radio-btn">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="Type"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel value="work" control={<Radio />} label="Work" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            </div>

                        </div>

                            {this.state.openContent ? null :
                                <div className="btn-content">
                                    <Button variant="contained" className="btn-place" onClick={this.handleContinue}>
                                        Continue
                                    </Button>
                                </div>
                            }
                        </div>

                        :

                        <div className="address-frame">
                            <div>
                            Customer Details
                            </div>
                        </div>

                    }


                    {this.state.openContent  ? 

                        <div className="order-content">

                            <div className="header1-detail" >Order Summary</div>
                            {/* <>{this.state.book.map((value, index) => {
                                return (
                                    <div>
                                        <div className="main-cart">
                                            <div>
                                                <img className="img-book" src={Image} alt="lll" />
                                            </div>
                                            <div className="text-content">
                                                <div className="bag-text">
                                                    <div className="cart-title">{value.product_id.bookName}</div>
                                                    <div className="cart-bookAuthor">by {value.product_id.author}</div>
                                                    <div className="price">Rs.{value.product_id.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.book.length - 1 == index ?
                                            <div className="btn-content">
                                                <Button variant="contained" className="btn-place" onClick={this.OrderPlaced} >
                                                    Checkout
                                                </Button>
                                                <Backdrop className={backdrop} open={this.state.openBackDrop} onClick={this.handleClose}>
                                                    <CircularProgress color="inherit" />
                                                </Backdrop>

                                            </div> : null}
                                    </div>


                                )
                            })
                            } </> */}

                                        <div className="btn-content">
                                                <Link  style={{textDecoration:"none"}} to="/OrderPlaced" ><Button variant="contained" className="btn-place"  >
                                                    Checkout
                                                </Button>
                                                </Link>
                                                </div>
                        </div>
                        :
                        <div className="order-frame" >
                            <div >
                            Order Summary
                            </div>
                        </div>
                    }


                       <Footer/>
                </div>
        
        
         
        
        )
    }
}

export default Cart
