import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Shared/Navbar';
import Login from './Component/Login/Login';
import RequireAuth from './Component/Login/RequireAuth';
import Signup from './Component/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Component/Dashboard/Dashboard';
import MyAppointment from './Component/Dashboard/MyAppointment';
import MyReview from './Component/Dashboard/MyReview';
import MyHistory from './Component/Dashboard/MyHistory';
import Users from './Component/Dashboard/Users';
import RequireAdmin from './Component/Login/RequireAdmin';

function App() {
  return (
    <div className='max-w-7xl m-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        {/* <Route path='/' element={}></Route> */}
        {/* <Route path='/' element={}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
