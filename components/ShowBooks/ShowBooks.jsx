import React from "react";
import { useState } from "react";
import "../ShowBooks/ShowBooks.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import bookimg from "../ShowBooks/bookimage.png"
import Button from '@material-ui/core/Button';

const ShowBooks = (props) => {
  
  const [newBook, setNewBook] = useState(false);

  const newNote2 = () => {
    setNewBook(!newBook);
  };



  

 

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
                            <Button className="but-1" variant="contained" >
                                Add To Bag
                            </Button>
                            <Button className="but-2" variant="contained" >
                                Wishlist
                            </Button>

                        </div>
      </CardActions>
    </Card>
    

   
    
 
        </div>
        
        
    

  );
};
export default ShowBooks;