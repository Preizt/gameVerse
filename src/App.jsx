import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AdminDashBoard from "./pages/AdminDashBoard";




function App() {
  return (
    <>
      

      <Routes>
         
        <Route path="/" element={<Home/>}></Route>
        <Route path='/login' element={<Auth/>}  />
        <Route path='/register' element={<Auth fromRegisterPage={true} />}  />
        <Route path='/admindashboard' element={<AdminDashBoard/>} />
        
      </Routes>
       
      
    </>
  );
}

export default App;
