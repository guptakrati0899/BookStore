import React from "react";
import { useState } from "react";
import "../ShowBooks/ShowBooks.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import bookimg from "../../Assets/bookimage.png"
import Button from '@material-ui/core/Button';
import UserService from "../../services/user_services";

const obj = new UserService();

const ShowBooks = (props) => {
  
  const [newBook, setNewBook] = useState(false);

  const newNote2 = () => {
    setNewBook(!newBook);
  };


  
  const addToCart = (info) => {



    obj.addToCart(info._id).then((response) => {

      console.log(response);

    }).catch(error => {
      console.log("error", error);
    })
  }




  

 

  return (
    <div>     
    <Card className="root">
      <CardContent className="content">
        <img className="image" src={bookimg} alt="" />
      </CardContent>
      <CardActions className="cardTxt">
        <div className="bookTitle">{props.info.bookName}</div>
        <div className="bookAuthor">by {props.info.author}</div>
        <div className="bookPrice">Rs.{props.info.price}</div>
        <div className="book-buttons">
            <div className= "left">
                            <Button className="but-1" variant="contained"  onClick={() => { addToCart(props.info) }}   > 
                                Add To Bag
                            </Button>
                            </div>
                            <div className="right">
                            <Button className="but-2" variant="contained" >
                                Wishlist
                            </Button>
                            </div>

                        </div>
      </CardActions>
    </Card>
    

   
    
 
        </div>
        
        
    

  );
};
export default ShowBooks;