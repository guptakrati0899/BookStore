import React, { Component } from 'react';
import UserService from '../../services/user_services';
import DisplayBook from '../../components/DisplayBook/DisplayBook';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'








const obj = new UserService();

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             bookarr: [],
            //  cartarr:[],
           
        }
    }

    // getCart = () => {
    //     obj.getCartItem()
    //     .then((response) => {
    //         console.log(response)
    //         this.setState ({
    //             cartarr: response.data.result })
    // }).catch(error => {
    //       console.log("error", error);
    //     })
    
    //   }



    displayBook = () => {
        obj.getAllbooks()
        .then((response) => {
            console.log(response)
          
            this.setState ({
                bookarr: response.data.result })
    })
        .catch((error) => {
          console.log(error);
        });
    }



    componentDidMount() {
        this.displayBook();
        // this.getCart();
    }


    render() {
        console.log(this.state.bookarr)
        return (
            <div>
            <Header/>
                <DisplayBook bookarr = {this.state.bookarr} displayBook={this.displayBook} />
              
                {/* getCart={this.getCart} */}
            <Footer/>
                
            </div>
        )
    }
}

export default Home