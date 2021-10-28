import React, { Component } from 'react';
import UserService from '../../services/user_services';
import DisplayBook from '../DisplayBook/DisplayBook';




const obj = new UserService();

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             bookarr: []
        }
    }



    displayBook = () => {
        obj.getAllbooks()
        .then((response) => {
            this.setState ({
                bookarr: response.data.result })
    })
        .catch((error) => {
          console.log(error);
        });
    }



    componentDidMount() {
        this.displayBook();
    }


    render() {
        console.log(this.state.bookarr)
        return (
            <div>
                <div className="displaybook-header2">
            <h2 className="header-text-displayBook">Books</h2>
            <p className="header-para">(128 items)</p>
            </div>
                <DisplayBook bookarr = {this.state.bookarr} displayBook={this.displayBook}/>
                
            </div>
        )
    }
}

export default Home