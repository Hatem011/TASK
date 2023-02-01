import Navbar from "../src/Components/Navbar/Navbar"
import Home from "../src/Components/Home/Home"
import Login from "../src/Components/Login/Login"
import Bussiness from "../src/Components/Bussiness/Bussiness"
import Daily from "../src/Components/Daily/Daily"
import Travel from "../src/Components/Travel/Travel"
import Register from "../src/Components/Register/Register"
import NotFound from "../src/Components/Notfound/Notfound"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
function App() {
let [userData,setUserData]=useState(null)
let navigate=useNavigate();

  function saveUserData()
  {
    let encoded=localStorage.getItem('userToken')
    let decoded=jwtDecode(encoded);
    setUserData(decoded)
  }
  function logout()
  {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login')
  }
  useEffect(()=>{
    if(localStorage.getItem('userToken')!=null)
    {
      saveUserData()
    }
  },[])
 
function ProtectedRoute(props)
      {
        if(localStorage.getItem('userToken')==null)
        {
        return  <Navigate to="/login"/>
        }
        else
        {
return props.children;
        }
      }
  return (
   <>
   <Navbar userData={userData} logout={logout}/>
   <div className="container">
   <Routes>
   <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
    <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
    <Route path="daily" element={<ProtectedRoute> <Daily/></ProtectedRoute>}></Route>
    <Route path="travel" element={<ProtectedRoute><Travel/></ProtectedRoute>}></Route>
    <Route path="bussiness" element={<ProtectedRoute> <Bussiness/></ProtectedRoute>}></Route>
    <Route path="login" element={<Login saveUser={saveUserData}/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
   </Routes>
   </div>
   </>
  );
}

export default App;
