import {  useContext, useState } from "react";
import { UserCard } from "./UserCard"; // Component for user display
import { ArrowRightFromLine,ArrowLeftToLine } from 'lucide-react';
import { UsersContext } from "../src/userContext";

export const Users = () => {
 

const {users,setUsers,page,setPage} = useContext(UsersContext);
const[filter,setFilter]=useState("");

    // const currentUsers = users.slice(0, usersPerPage); 
    if (!users) return <p>No user found</p>;
 const filteredUsers = filter.trim() === ""? users:  users.filter((users) =>
   (users.first_name.toLowerCase().includes(filter.trim().toLowerCase()))||(users.last_name.toLowerCase().includes(filter.trim().toLowerCase()))
  );

  return (
    
    <div className="p-5">
        
        
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <div className=" mb-4  shadow-lg">
            <input onChange={(e) => {
                setFilter(e.target.value)
                
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div className="flex flex-col gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.id} id={user.id}firstName={user.first_name} lastName={user.last_name} avatar={user.avatar} email={user.email} users={users} setUsers={setUsers}/>
          ))
        ) : (
            <p className="text-center text-gray-500">No users found</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-5">
        <button
          className={`px-4 py-2 mx-2  bg-gray-500 hover:text-gray-700  text-white rounded`}
          onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}
        
        >
          <ArrowLeftToLine />
        </button>
        <h2 className="m-2">{page}</h2>
        <button
          className={`px-4 py-2 mx-2  bg-gray-500 hover:text-gray-700  text-white rounded`}
          onClick={() => setPage((page) => (page =page+1))}
        
        >
          <ArrowRightFromLine />
        </button>
      </div>
    </div>
  );
};


