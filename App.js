
import './App.css';
import Dashboard from "../src/pages/Dashboard/Dashboard"
import Signup from './pages/Signup/Signup';
import {
  BrowserRouter,Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      < Switch>
        <Route path="/Dashboard" component={Dashboard} />
        
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
