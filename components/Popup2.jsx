import { useEffect } from "react";
import { Button } from "./Button"
import { useNavigate } from "react-router";
export const Popup2 = ({label, route}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate(`/${route}`)
        },2000)
    },[navigate])
    
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-xs bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold">{label}</p>
                
            </div>
        </div>
    );
};
