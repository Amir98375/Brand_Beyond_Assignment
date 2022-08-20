import logo from './logo.svg';
import './App.css';
import { Login } from './component/Login';
import { Signup } from './component/Signup';
import { AllRoutes } from './component/Allroutes/AllRoute';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
       {/* <AllRoutes/> */}
       <Home/>
    </div>
  );
}

export default App;
