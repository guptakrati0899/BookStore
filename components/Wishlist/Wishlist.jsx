import React, { Component } from 'react'
import '../Wishlist/Wishlist.scss';
import { Redirect } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Image from '../../Assets/bookimage.png';
import UserService from '../../services/user_services';
import DeleteIcon from '@mui/icons-material/Delete';

const obj = new UserService();


export default class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wishes: [],
        
           
        }

    }

    componentDidMount() {
        this.getWishlistItem();
 
    }

    getWishlistItem = () => {
        obj.getWishlist().then((response) => {
            console.log("whish list data -----", response.data.result);
            this.setState({ wishes: response.data.result });
        }).catch(error => {
            console.log("error", error);
        })

    }

   

    // delete(e) {

    //     console.log("id ", e);
    //     user_services.deleteWishlistItem(e).then((data) => {
    //         console.log(data);
    //         this.getWishlistItem();
    //     }).catch(error => {
    //         console.log("error", error);
    //     })
    // }


    render() {

        return (
            <div>
                <Header />
                <div className="CartBag-frame1">
                    <div className="title1">Home/My Wishlist</div>
                    <div className="cartBag-content1">
                        <div className="heading-wishlist">My Whislist({this.state.wishes.length}) </div>

                        {this.state.wishes.map((value, index) =>
                            <div className="main-cart1">
                                <div>
                                    <img className="img-book" src={Image} alt="" />
                                </div>
                                <div className="text-content1">
                                    <div className="bag-text1">
                                        <div className="cart-title1">{value.product_id.bookName}</div>
                                        <div className="cart-bookAuthor1">by {value.product_id.author}</div>
                                        <div className="price1">Rs.{value.product_id.price}</div>
                                    </div>
                                    <div className="Delete-add-Button" style = {{display : 'flex'}}>
                                        <div className="delelte-content">
                                            <div style={{ cursor: "pointer", color: "grey" }} onClick={() => this.delete(value.product_id._id)}><DeleteIcon /></div>
                                    
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div  >
                </div>
                <Footer/>
            </div>
        )
    }
}