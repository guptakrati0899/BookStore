import React from 'react';
import UserService from '../../services/user_services';




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
                bookarr: response.data.data.data })
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
                <DisplayBook bookarr = {this.state.bookarr} displayBook={this.displayBook}/>
                
            </div>
        )
    }
}

export default Home