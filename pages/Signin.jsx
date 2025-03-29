import { useNavigate } from "react-router"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SmallHeading } from "../components/Smallheading"
import { Subheading } from "../components/Subheading"
// import axios from "axios";
import { useState } from "react"
import myImage from "/Users/abhinavgautam/Desktop/project/frontend/images/logoblack.png";

export const Signin= ()=>{
    const navigate = useNavigate();
    const[email,setEmail]= useState("");
    const[password,setPassword]=useState("");
    const[error,setError]= useState("");
    
const authHandling =(async()=>{
    try{

        const response = await fetch("https://reqres.in/api/login",
             {
                    method: "POST",
                    headers: {
                            "Content-Type": "application/json",
                            },
                    body: JSON.stringify({ email:email , password:password}),
            });
            const Json = await response.json();
            if(response && Json.token){
                localStorage.setItem("token",Json.token)

            navigate("/dashboard");
            }else{
                setError("Invalid inputs");
            }
        }catch(error){
            setError(error);
        }
})

    return(<>
        <div className="    flex  bg-slate-100 gap-5 h-screen w-screen ">
            <div className="hidden  md:flex flex-col items-center justify-center  bg-gray-300 rounded-2xl shadow-2xl w-full  ">
                <div>
                <Heading label={"USER"} ></Heading>
                <Heading label={"MANAGEMENT"}></Heading>
                <Heading label={"SYSTEM"}></Heading>

                </div>
                
            </div> 
         
                <div className="flex flex-col justify-center item-center w-full p-10 ">
                 <div className="flex justify-center mb-10">
                    <img src={myImage} alt="LOGO" className="h-10 w-10" />
                    <Subheading label={"REQRES"}></Subheading>
                 </div>
                    <div >

                        <div className="justify-center justify-items-center ">
                        <Heading label={"WELCOME BACK"}>  </Heading> 
                        <SmallHeading label={"enter your email and password to acces your account"}> </SmallHeading>
                        </div>
                        <div >
                        
                            <InputBox label={"Email"} placeholder={"Enter Your Email"} onChange={(e)=>{
                                setEmail(e.target.value)
                            }} value={email} type="text" ></InputBox>
                            <InputBox label="Password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}
                           value={password} type="password" // This enables the eye icon toggle
                            />

                            {error && <h4 className="text-red-500">Invalid Inputs </h4>}
                            <Button label={"SignIn"} onClick={authHandling}  ></Button>

                        </div>
                       

                    </div>

            </div>

        </div>
    
    </>)
}