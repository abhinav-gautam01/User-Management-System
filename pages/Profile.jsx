import { UsersProvider } from "../src/userContext.jsx"
import { UserProfile } from '../components/UserProfile.jsx';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Popup2 } from "../components/Popup2.jsx";

export const Profile = ()=>{
    const navigate = useNavigate();
    const[tokenA,setToken]=useState(true);

    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
           setToken(false)
             // Redirect to Signin if token is missing

        }
    }, [navigate]);
    return(
        
           <>
                
                {(tokenA)? <UsersProvider> <UserProfile/>  </UsersProvider>: <Popup2 label={"Error: Invalid or missing token. Please check your credentials and try again."} route={"signin"}></Popup2> }
           </>
                 
            
             
    )
};
