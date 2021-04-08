import './Css/main.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUp from './component/SignUp';
import Login from './component/Login';
import Index from './component/Index';


function App() {
  
  
  return (
    <Router>
    <div className="App">
    <Route exact={true} path="/" component={Index} />
          <Route exact={true} path="/Signup" component={SignUp} />
          <Route exact={true} path="/Login" component={Login} />

      

    </div>
    </Router>
  );
}




export default App;
