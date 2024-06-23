import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import {Navigate, Route,Routes} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);
  const {authUser}= useAuthContext();

  return (
    <div className="bg-sky-100 h-screen flex items-center justify-center bg-[161618] text-white ">
      <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />

      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
