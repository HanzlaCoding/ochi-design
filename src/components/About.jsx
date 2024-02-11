import "./Font.css";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-['Neue Montreal'] font-medium">
      <h1 className="para  text-[4.5vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] flex gap-5 border-[#84934e] mt-20 pt-10">
      <div className="w-1/2">
        <h1 className="rm text-5xl mt-5">Our approach:</h1>
        <button className="rm uppercase py-4 px-12 bg-zinc-900 mt-10 text-white rounded-full flex gap-5 justify-center items-center">
          Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
        <div  className="w-1/2 h-[70vh] rounded-3xl bg-[#3e4427]"></div>
      </div>  
    </div>
  );
}

export default About;