import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import Zoom from "./App-New";
import Secondyearzoom from "./Secondyearzoom";
import Thirdyearzoom from "./Thirdyearzoom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          {/* <Header/> */}
          <Switch>
          <PrivateRoute component={Zoom} path="/first-year" exact/>
          <PrivateRoute component={Secondyearzoom} path="/second-year" exact/>
          <PrivateRoute component={Thirdyearzoom} path="/third-year" exact/>
          </Switch>
          <PrivateRoute component={HomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
