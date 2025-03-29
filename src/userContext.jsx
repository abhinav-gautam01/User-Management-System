import { createContext, useState,useEffect } from "react";
import axios from 'axios';
export const UsersContext = createContext();

export const UsersProvider = (({children})=>{
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
          const userData = res.data.data;
          console.log("Fetched Data: ", userData);
  
          setUsers(userData);
  
        } catch (error) {
          console.error("Error fetching users:", error);
          setUsers([]);
        }
      };
  
      // Fetch data only if users are empty
     
        fetchData();
      
  
    }, [page]); // Runs when `page` changes

    
      
      
      return(
        <UsersContext.Provider value={{ users, setUsers,page,setPage}}>
      {children}
    </UsersContext.Provider>
      )

})