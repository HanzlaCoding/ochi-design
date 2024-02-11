import { MdOutlineArrowOutward } from "react-icons/md";
import './Font.css';

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-52 px-20">
        {["we create","eye-opening","presentations"].map((items,index)=>{
            return (<div key={index} className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                    {index === 1 && (<div className="bg-red-600 mr-[1vw] w-[9vw] rounded-md h-[5.7vw] -top-[0.2vw] relative"></div>)}
            <h1 className="pt-[2vw] -mb-[1vw] text-[9vw] uppercase leading-[5.5vw] tracking-tight">{items}</h1>
            </div>
        </div>)
        })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-10 flex justify-between items-center px-20 py-5">
            {["For public and private companies","From the first pitch to IPO"].map((items,index)=>{
                return <p className="text-md leading-none tracking-tight font-['Neue Montreal']" key={index}>{items}</p>
            })}
            <div className="start flex justify-center items-center gap-2">
                <div className="border-[2px] font-light text-md border-zinc-500 uppercase rounded-full py-2 px-5">start the project</div>
                <div className="w-10 h-10 rounded-full border-zinc-500 border-[2px] flex justify-center items-center text-xl">
                    <MdOutlineArrowOutward/>
                </div>
            </div>
        </div>
      </div>
  );
}

export default LandingPage;
'Test_Founders_Gtsk X-Cond_SmB'