import { useContext,useEffect,useState } from 'react';
import { useLocation} from 'react-router-dom';
import { InputBox } from './InputBox';
import { Button } from './Button';
import { Popup } from './Popup';
import axios from 'axios';
import { UsersContext } from "../src/userContext";





export const UserProfile = ()=>{
  const {users,  setUsers } = useContext(UsersContext);
  const location = useLocation();

  const user = location.state;
  console.log(user);

    const[popup, setPopup]= useState(false);
    const[success,setSuccess]=useState(false);
    const[fail,setFail]=useState(false);
    const[msg,setMessage]=useState("");

   

    const[email,setEmail]=useState("");
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");

    useEffect(() => {
      if (user) {
          setEmail(user.email);
          setFirstName(user.firstName);
          setLastName(user.lastName);
      }
  }, [user]);
    
    if (!user) return <p>Loading user data...</p>;
    return(
        <div className='flex flex-col w-screen h-screen justify-center items-center bg-slate-100  gap-5'>
            <div>
                <img src={user.avatar} alt="LOGO" className="h-20 w-20 rounded-full"  />

            </div>
            <div>
                <InputBox label={"First Name"} placeholder={"First_Name"} onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}  ></InputBox>
                <InputBox label={"Last Name"} placeholder={"Last Name"} onChange={(e)=>{setLastName(e.target.value)}} value={lastName} ></InputBox>
                <InputBox label={"Email"} placeholder={"Email"} onChange={(e)=>{setEmail(e.target.value)}} value={email} ></InputBox>
                {success && <h3 className='text-green-400'>{msg}</h3>}
                {fail && <h3 className='text-red-400'>{msg}</h3>}

            <div className='flex my-5'>
                <Button label={"Edit User"} onClick={()=>{setPopup(true)}} ></Button>

                {popup && <Popup label="EDIT" onClose={() => setPopup(false)} onClick={async()=>{
                    const res = await axios({
                        method: 'put',
                        url: 'https://reqres.in/api/users/1',
                        data: {
                            first_name: firstName,
                            last_name: lastName,
                            email: email
                        }
                      });
                        console.log(res);
                      if(res){
                        setSuccess(true);
                        setMessage("successfully Edited")
                        setPopup(false);
                        const updatedUsers = users.map((u) =>
                          u.id === user.id ? { ...u, first_name: firstName, last_name: lastName, email: email } : u
                        );
                
                        setUsers(updatedUsers);
                     
                        
                      }else{
                        setFail(true);
                        setMessage("Internal Error Try Again");
                        setPopup(false);
                      
                      }
                }} />}

                
            </div>

            </div>


        </div>
    )
}