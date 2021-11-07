import React, { useEffect } from 'react';
import UserService from '../../services/user_services';
import "./Home.scss"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Pagination, Stack } from '@mui/material';
import ShowBooks from '../../components/ShowBooks/ShowBooks';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

const obj = new UserService();


export default function Home(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [bookarr, setBooks] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const [perPage, setPerPage] = React.useState("8");
    const [currentPage, setCurrentPage] = React.useState("1");
    const [search, setSearchBook] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
       displayBook();
        getCartItem();
    },[],search);


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
  
    const getCartItem = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            setCart(response.data.result);
        }).catch(error => {
            console.log(error);
        })
    }

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
  
  
    const handlePagination = (e, newPages) => {
      
        setCurrentPage(newPages);
    }

    const searchBooks = (e) => {
        setSearchBook(e.target.info);
        console.log(e.target.info);
        let filterBooks = bookarr;
        filterBooks = bookarr.filter((val) => {
            console.log(val);
            return val.author.toLowerCase().includes(e.target.info)
                          ||val.bookName.toLowerCase().includes(e.target.info)
                          ||val.description.toUpperCase().includes(e.target.info)
                          ||val.author.toUpperCase().includes(e.target.info)
                          ||val.bookName.toUpperCase().includes(e.target.info)
                          ||val.author.includes(e.target.info)
                          ||val.bookName.includes(e.target.info)
        })
        if (e.target.info === "") {
            setSearchData(filterBooks);
            console.log(setSearchData(filterBooks))
        }
        else {
            setSearchData(bookarr)
            console.log(setSearchData(filterBooks))
        }
    }
    
//   const searchBooks = (e) => {
//     setSearchBook(e.target.value);
//     console.log(e.target.value);
//     let filterBooks = props.bookarr;
//     filterBooks = props.bookarr.filter((val) => {
   
//       console.log("value---------->",val);
//        return val.author.toLowerCase().includes(e.target.value)
//               ||val.bookName.toLowerCase().includes(e.target.value)
//               ||val.description.toUpperCase().includes(e.target.value)
//               ||val.author.toUpperCase().includes(e.target.value)
//               ||val.bookName.toUpperCase().includes(e.target.value)
//               ||val.author.includes(e.target.value)
//               ||val.bookName.includes(e.target.value)
//         })
//     if (e.target.value === ""){
//       setSearchData(filterBooks);
//       console.log(setSearchData(filterBooks))
//   }
//   else{
//     setSearchData(props.bookarr)
//     console.log("search data", setSearchData(filterBooks))
//   }
// }

    const booksDetails = (book) => {
        return (<ShowBooks info={book} get={displayBook} getCard={getCartItem} />)
    }

    const LBook = currentPage * perPage;
    const FBook = LBook - perPage;
    const currentBooks = bookarr.slice(FBook, LBook);

    return (
        <>
            <Header book={bookarr} val={cart.length} search={searchBooks} />
                <div>
                <div className="displaybook-header2">
            <h2 className="header-text-displayBook">Books</h2>
                        <p className="header-para">(
                            {search === "" ? (
                                currentBooks.length
                            ) : (
                                searchData.length
                            )})
                        </p>
                    </div>
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
              <MenuItem value=" alph-asec"onClick={alph}>Newest arrivals</MenuItem>
            </Menu>
          </div>
                    <div className="displaybook-mainContainer">
                        {search === "" ? (
                            currentBooks.map(booksDetails)
                        ) : (
                            searchData.map(booksDetails)
                        )}
                    </div>
                   
      
     
                                <div className="pagination">
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.floor(bookarr.length / perPage + 1)}
                                shape="rounded"
                                onChange={handlePagination}
                            />
                        </Stack>
                        </div>
                   
                </div>
            <Footer />
        </>
    );
}