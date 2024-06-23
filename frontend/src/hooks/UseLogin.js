import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const UseLogin =()=>{
    const [loading,setLoading]=useState(false);
    const{setAuthUser}  =  useAuthContext();

    const login=async({username,password})=>{
        const success= await handleInputerror({username,password});
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({username,password})
              })
              const data= await res.json();

              if(data.error){
                throw new Error(data.error);
              }
        
              localStorage.setItem("chat-user",JSON.stringify(data));
              setAuthUser(data);
        
            
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {login};
}

export default UseLogin;



function handleInputerror({username,password}) {
    if(!username ||!password) {
        toast.error("Please fill all fields")
        return false
    }
    if(password.length<6){
        toast.error("Password must be at least 6 characters")
        return false
    } 
    return true;
}