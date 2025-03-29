import myImage from "../images/logoblack.png";
import { Subheading } from "./Subheading";
export const Appbar =()=>{

    return(
        <>
    <div className="shadow h-14 flex justify-between">
        <div className="flex  justify-center h-full p-2" >
            <img src={myImage} alt="LOGO" className="h-10 w-10" />
             <Subheading label={"REQRES"}></Subheading>
        </div>
        <div className="flex">

            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl"  >
                R
                </div>
            </div>
        </div>
    </div>
        </>
    )
}