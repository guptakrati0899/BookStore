import React, { Component } from 'react'
import '../Wishlist/Wishlist.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Image from '../../Assets/bookimage.png';
import UserService from '../../services/user_services';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const obj = new UserService();


export default class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wishes: [],
            book:[],
        
           
        }

    }

    componentDidMount() {
        this.getWishlistItem();
        this. getCartItem();
 
    }

    getWishlistItem = () => {
        obj.getWishlist().then((response) => {
            console.log("whish list data -----", response.data.result);
            this.setState({ wishes: response.data.result });
        }).catch(error => {
            console.log("error", error);
        })

    }
    
    getCartItem = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            this.setState({ book: response.data.result });
        }).catch(error => {
            console.log(error);
        })
    }

    moveToCart = (value) => {
        console.log(value)
        obj.addToCart(value).then((response) => {
            console.log(response);
            this.getCartItems();
            this.deleteWish(value);
        }).catch(error => {
            console.log(error);
        })
    }


   

    deleteWish(id) {
        console.log(typeof(id));
        obj.deleteWishlistItem(id).then((response) => {
            console.log(response);
            this.getWishlistItem();
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.wishes.length)

        const wishDetails = this.state.wishes.map((value, index) => {
            return (
                <div className="main-cart">
                    <div className="wish-con">
                    <div className="img-content">
                        <img className="img-book" src={Image} alt="" />
                    </div>
                    <div className="text-content">
                        <div className="bag-text">
                            <div className="cart-title">{value.product_id.bookName}</div>
                            <div className="cart-bookAuthor">by {value.product_id.author}</div>
                            <div className="price">Rs.{value.product_id.price}</div>
                        </div>
                    
                        <div className="delete_Button">
                            <div className="delelte_content">
                                <div
                                    className="del_icon"
                                    onClick={() => this.deleteWish(value.product_id._id)}
                                >
                                    <DeleteIcon />
                                </div>
                            </div>
                            <div className="btn_content4">
                                <Link to="/Cart" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" className="btn_place4" onClick={() => this.moveToCart(value.product_id._id)} >
                                        Move to cart
                                    </Button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <Header value={this.state.book.length} />
                <div className="wish_frame">
                    <div className="wish_content">
                        <div className="wishlist_heading">My Wishlist({this.state.wishes.length}) </div>
                        <div className="cart_details">{wishDetails}</div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}