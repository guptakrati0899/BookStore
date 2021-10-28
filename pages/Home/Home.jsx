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
             anchorEl : null,
        }
    }

    open=() =>{
        Boolean(this.state.anchorEl)
    }

    handleClose = () => {
        this.setState({
            anchorEl : null
        })
      };

     handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,

        })
    };
      



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
            <Header/>
                <DisplayBook bookarr = {this.state.bookarr} displayBook={this.displayBook}/>
              

            <Footer/>
                
            </div>
        )
    }
}

export default Home