import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../OrderPlaced/OrderPlaced.scss';
import Success from '../../Assets/success.png';
import Button from '@material-ui/core/Button';

class OrderPlaced extends Component {


    continueShopping = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                <Header />
                <div className="success_main">
                    <div className="success_img">
                        <img className="image1" src={Success} alt="Success" />
                    </div>
                    <div className="success_text">
                        hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                    </div>
                    <div className="info_table">
                        <table>
                            <tr>
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>admin@bookstore.com</td>
                                <td>+91 8707595662</td>
                                <td>Kidwai Nagar, Kanpur, Uttar Pradesh 208011</td>
                            </tr>
                        </table>
                    </div>
                    <div className="ctn_shopping">
                        <Button className="shop_btn" onClick={this.continueShopping} fullWidth size="small" color="primary" variant="contained">
                            Continue Shopping
                        </Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default OrderPlaced;