
import './App.css';
import Dashboard from "../src/pages/Dashboard/Dashboard"
import{BrowserRouter as Router , Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
      < Switch>
        <Route path="/" component={Dashboard} />
        
      </Switch>
    </Router>

    </div>
  );
}

export default App;
