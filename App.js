
import './App.css';
import Dashboard from "../src/pages/Dashboard/Dashboard"
import{BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
      < Switch>
        <Route path ="/Login" component={Dashboard} />
        <Route path="/BooksDashboard" component={Home} />

        
      </Switch>
    </Router> 

   

    </div>
  );
}

export default App;
