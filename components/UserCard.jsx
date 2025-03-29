import { useNavigate } from "react-router";
import { Button } from "./Button";
import { useState,useContext } from "react";
import axios from 'axios';
import { Popup } from "./Popup";
import { UsersContext } from "../src/userContext";

export const UserCard = ({ id,firstName, lastName, avatar,email }) => {
  const[popup,setPopup]= useState(false);
 
  const {users,  setUsers } = useContext(UsersContext);
  
  const navigate =useNavigate();
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between space-x-4">
        <div className="flex gap-4">
            <img src={avatar} alt="User" className="w-16 h-16 rounded-full" />
            <h3 className="text-lg my-5 font-semibold">{firstName} {lastName}</h3>
        </div>
        <div>
          <Button label={"EDIT"} onClick={()=>{navigate("/profile", { state: { id, firstName, lastName, avatar, email } })}} />
          <Button label={"Delete User"} onClick={()=>{setPopup(true)}} ></Button>
          {popup && <Popup label="DELETE" onClose={() => setPopup(false)} onClick={async()=>{
                    const res = await axios({
                        method: 'delete',
                        url: 'https://reqres.in/api/users/1',
                      });

                        console.log(res);
                      if(res){
                        navigate("/dashboard")
                        const newUser = users.filter((users)=>!(users.id==id));
                        setUsers(newUser);
                        setPopup(false);
                      }else{
                        
                        setPopup(false);

                      }
                }} />}
        </div>
  
      </div>
    );
  };
  