import logo from './logo.svg';
import './App.css';
import { Login } from './component/Login';
import { Signup } from './component/Signup';
import { AllRoutes } from './component/Allroutes/AllRoute';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import { AdminPanel } from './component/AdminPanel';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <AllRoutes/>
       {/* <Home/> */}
       {/* <AdminPanel/> */}
    </div>
  );
}

export default App;
