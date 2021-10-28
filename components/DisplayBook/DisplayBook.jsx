import React from "react";
import ShowBooks from "../ShowBooks/ShowBooks";
import "../DisplayBook/DisplayBook.scss"


const DisplayBook = (props) => { 
  const bookList = props.bookarr.map((info) => <ShowBooks info={info} displayBook ={props.displayBook}/>);


   return <div className="displaybook-mainContainer">{bookList}</div>;
};
export default DisplayBook;