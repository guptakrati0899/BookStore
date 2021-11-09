import React from 'react';
import './App.css';
import Dashboard from "../src/pages/Dashboard/Dashboard"
import{BrowserRouter as Router , Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import WishList from './components/Wishlist/Wishlist';
import UserService from '../src/services/user_services';
import BookContext from './components/Context/Context';


const obj = new UserService();








function App() {

  const [cartCount, setCount] = React.useState();
  const [cartBooks, setCartBooks] = React.useState();

  const getCartItem = () => {
    obj
      .getCartItem()
      .then((response) => {
        setCount(response.data.result.length);
        setCartBooks(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getCartItem();
  }, [cartCount]);

  

  return (
    <div className="App">
          <BookContext.Provider value={{ cartCount, getCartItem, cartBooks }}>
  
     <Router>
      < Switch>
        < Route exact path ="/">
        <Redirect to = "/dashboard"/>
        </Route>
        <Route  path ="/dashboard" component={Dashboard} />
        <Route  path="/home" component={Home} />
        <Route path = "/Cart" component={Cart}/>
        <Route path = "/OrderPlaced" component={OrderPlaced}/>
        <Route path = "/WishList" component={WishList}/>
      </Switch>
    </Router> 
    </BookContext.Provider>

    {/* <Cart/> */}

    {/* <Home/> */}

   

    </div>
  );
}

export default App;
