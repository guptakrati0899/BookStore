import React, { Component } from 'react';
import UserService from '../../services/user_services';
import DisplayBook from '../../components/DisplayBook/DisplayBook';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'





export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             bookarr: [],
         
           
        }
    }



    






   
    


    render() {
        console.log(this.state.bookarr)
        return (
            <div>
            <Header />
                <DisplayBook  />
              
                {/* getCart={this.getCart} */}
            <Footer/>
                
            </div>
        )
    }
}

export default Home