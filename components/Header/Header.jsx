import React,{useState} from 'react';
import '../Header/Header.scss';
import headpic from '../../Assets/education.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Popper from '@material-ui/core/Popper';
import BookContext from '../Context/Context';








function Header(props) {
    const { cartCount } = React.useContext(BookContext);


const [anchorEl, setAnchorEl] = React.useState(null);

const open = Boolean(anchorEl);

const handleProfile = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
};


const searchBooks = (e) => {
    props.search(e)
}


   
        return (
            <>
                <AppBar className="header_main" position="fixed">
                    <Toolbar>
                        <div className="header_title">
                            <img src={headpic} alt="Book"></img>
                            <div className="text">Bookstore</div>
                        </div>
                        <div className="search">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                className="input"
                                onChange={e => searchBooks(e)}
                            />
                        </div>
                        <div className="side-header">
                        <div className="profile">
                            <div className="profile_icon"> <PersonOutlineIcon onClick={handleProfile} /></div>
                            <span className="profile_text">Krati</span>
                            <Popper className="pop" open={open} anchorEl={anchorEl} placement={'bottom-start'} transition>
                                <div className="paper">
                                    <div className="popContent name">Hello Krati</div>
                                    <Link to="/WishList" style={{textDecoration:'none', color:'#000'}}>
                                        <div className="popContent">
                                            &#x2661; WishList
                                        </div>
                                    </Link>
                                    <div className="logout">
                                        <Link to="/dashboard" style={{textDecoration:'none'}}>
                                            <div className="popContent">
                                                <button className="logout_btn">Logout</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Popper>
                            </div>
                            
                            <div className="cart_main">
                               
                                <Badge badgeContent={cartCount} 
                                    color="primary"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}>
                                       <Link style={{textDecoration:'none ', color:'white'}} to="/Cart" ><ShoppingCartOutlined /> </Link>
                                </Badge>
                                <span className="cart">Cart</span>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        );

    }


export default Header;