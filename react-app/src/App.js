import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCom from './Component/NavbarCom'
import Addcustomer from './Component/Addcustomer'
import Allcustomer from './Component/Allcustomer';
import Editcustomer from './Component/Editcustomer';
import Home from './Component/Home';
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
         <NavbarCom/>
         <Router>
            <Routes>
                 <Route path='/' element={<Home/>} />         
                 <Route path='/add' element={<Addcustomer/>} />         
                 <Route path='/all' element={<Allcustomer/>} /> 
                 <Route path='/edit' element={<Editcustomer/>} /> 
            </Routes>
         </Router>

    </div>
  );

}

export default App;
