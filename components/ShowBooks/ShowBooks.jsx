import React from "react";
import { useState } from "react";
import "../ShowBooks/ShowBooks.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import bookimg from "../../Assets/bookimage.png"
import Button from '@material-ui/core/Button';
import UserService from "../../services/user_services";
import { Link } from "react-router-dom";

const obj = new UserService();

const ShowBooks = (props) => {

  const [add,setadd] = useState(false);
  const [wish,setwish] = useState(false);

  

  
  const addToCart = (info) => {

    setadd(true);



    obj.addToCart(info._id).then((response) => {

      console.log(response);
      props.getCard();

    }).catch(error => {
      console.log("error", error);
    })
  }

  

  const addToWish = (info) => {
    setwish(true);
   
    obj.addToWishList(info._id).then((response) => {
        console.log(response);
        props.getCard();
    }).catch(error => {
        console.log(error);
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
                            <Button className="but-1" variant="contained" 
                             style={{width:add?'14.5rem':'7.3rem', marginLeft:add?'7.8rem':'',backgroundColor:add?'rgb(74, 170, 248)':'#A03037',height:add?'2.6rem':''}}
                             color={add?'primary':''}
                              onClick={() => { addToCart(props.info) }}   > 
                                Add To Bag
                            </Button>
                            </div>
                            <div className="right">
                            <Button className="but-2"  
                             style={{width:wish?'15.6vw':'6.8rem', marginLeft:wish?'-8.1rem':'',height:wish?'2.6rem':'',backgroundColor:wish?'rgb(74, 170, 248)':'rgb(255, 255, 255)', color:wish?'white':''}} 
                             onClick={() =>{addToWish(props.info)}} variant="contained" >
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