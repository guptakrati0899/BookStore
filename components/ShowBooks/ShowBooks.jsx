import React from "react";
import { useState } from "react";
import "../ShowBooks/ShowBooks.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import bookimg from "../ShowBooks/bookimage.png"

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
        <div>Rs.{props.info.price}</div>
      </CardActions>
    </Card>
    

   
    
 
        </div>
        
        
    

  );
};
export default ShowBooks;