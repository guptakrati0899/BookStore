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
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  const bookList = props.bookarr.map((info) => <ShowBooks info={info} displayBook ={props.displayBook}/>);


   return <div>
        <div className="displaybook-header2">
            <h2 className="header-text-displayBook">Books</h2>
            <p className="header-para">(128 items)</p>
        

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