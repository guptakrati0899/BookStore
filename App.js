
import './App.css';
import Dashboard from "../src/pages/Dashboard/Dashboard"
import{BrowserRouter as Router , Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import WishList from './components/Wishlist/Wishlist';

function App() {
  return (
    <div className="App">
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

    {/* <Cart/> */}

    {/* <Home/> */}

   

    </div>
  );
}

export default App;
