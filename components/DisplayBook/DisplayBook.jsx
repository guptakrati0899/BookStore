import React from "react";
import ShowBooks from "../ShowBooks/ShowBooks";
import "../DisplayBook/DisplayBook.scss"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Pagination, Stack } from '@mui/material';
import UserService from "../../services/user_services";

const obj = new UserService();





const DisplayBook = (props) => { 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [search, setSearchBook] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);
    const [bookarr, setBooks] = React.useState([]);
    

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };




    const asec = () => {
   
      let sortData = bookarr.sort((a, b) => (a.price < b.price && 1) || -1);
      console.log(sortData);
      setBooks(sortData);
      handleClose();
    };
  
    const desc = () => {

      let sortData = bookarr.sort((a, b) => (a.price > b.price && 1) || -1);
      console.log(sortData);
      setBooks(sortData);
      handleClose();
    };
  
    const alph = () => {
     
      let sortData = bookarr.sort((a, b) =>
      (a.bookName > b.bookName && 1) || -1);
     
      console.log(sortData);
      setBooks(sortData);
      handleClose();
    };







   const displayBook = () => {
      obj.getAllbooks()
      .then((response) => {
          console.log(response)
              setBooks(response.data.result );
  })
      .catch((error) => {
        console.log(error);
      });
  }


  React.useEffect(() =>{
    displayBook();
  },[]);




    
  // const sort = () => {

  //   if (e.target.value === "asec") {
  //     let sortData = [...props.bookarr].sort(function (a, b) {
  //       return a.price - b.price
  //     });
  //     setState.bookarr(sortData);
  //   }
  //   else if (e.target.value === "dsec") {
  //     let sortData = [...props.bookarr].sort(function (a, b) {
  //       return b.price - a.price
  //     });
  //     props.bookarr(sortData);
  //   }
  //   else if (e.target.value === "alp-asec") {
  //     let sortData = [...props.bookarr].sort(function (a, b) {
  //       if (a.bookName < b.bookName) { return -1; }
  //       return 0;
  //     });
  //     props.bookarr(sortData);
  //   }
  //   else if (e.target.value === "alp-dsec") {
  //     let sortData = [...props.bookarr].sort(function (a, b) {
  //       if (a.bookName > b.bookName) { return 1; }
  //       return 0;
  //     });
  //     props.bookarr(sortData);
  //   }
  // }


  


 


  const bookList = bookarr.map((info) => <ShowBooks info={info} displayBook ={displayBook}/>);



  const searchBooks = (e) => {
    setSearchBook(e.target.value);
    console.log(e.target.value);
    let filterBooks = props.bookarr;
    filterBooks = props.bookarr.filter((val) => {
   
      console.log("value---------->",val);
       return val.author.toLowerCase().includes(e.target.value)
              ||val.bookName.toLowerCase().includes(e.target.value)
              ||val.description.toUpperCase().includes(e.target.value)
              ||val.author.toUpperCase().includes(e.target.value)
              ||val.bookName.toUpperCase().includes(e.target.value)
              ||val.author.includes(e.target.value)
              ||val.bookName.includes(e.target.value)
        })
    if (e.target.value === ""){
      setSearchData(filterBooks);
      console.log(setSearchData(filterBooks))
  }
  else{
    setSearchData(props.bookarr)
    console.log("search data", setSearchData(filterBooks))
  }
}



   return <div>
        <div className="displaybook-header2">
            <h2 className="header-text-displayBook">Books</h2>
            <p className="header-para">({bookarr.length})</p>
        

            <div className="menudiv">
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Sort by relevance <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            
              MenuListProps={{
                "aria-labelledby": "basic-button",
                
              }}
            >
              <MenuItem value ="asec" onClick={asec} >Price: High to low</MenuItem>
              <MenuItem  value="dsec"onClick={desc}>Price: Low to high</MenuItem>
              <MenuItem value=" alph-asec"onClick={alph}>Newest arivals</MenuItem>
            </Menu>
          </div>
       </div>
       <div className="displaybook-mainContainer">{bookList}</div>;
       <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" />
                    </Stack>
       </div>
};
export default DisplayBook;