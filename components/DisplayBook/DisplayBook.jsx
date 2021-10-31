import React from "react";
import ShowBooks from "../ShowBooks/ShowBooks";
import "../DisplayBook/DisplayBook.scss"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Pagination, Stack } from '@mui/material';


const DisplayBook = (props) => { 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [search, setSearchBook] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);
    

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


  


 


  const bookList = props.bookarr.map((info) => <ShowBooks info={info} displayBook ={props.displayBook}/>);



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
            <p className="header-para">({props.bookarr.length})</p>
        

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
              <MenuItem onClick={handleClose}>Price: High to low</MenuItem>
              <MenuItem onClick={handleClose}>Price: Low to high</MenuItem>
              <MenuItem onClick={handleClose}>Newest arivals</MenuItem>
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