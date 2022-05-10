import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Shared/Navbar';
import Login from './Component/Login/Login';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/' element={}></Route> */}
        {/* <Route path='/' element={}></Route> */}
        {/* <Route path='/' element={}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
