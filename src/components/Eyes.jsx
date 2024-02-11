import { useState, useEffect } from "react";

function Eyes() {
  let [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth;
      let deltaY = mouseY - window.innerHeight;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex justify-between items-center gap-10 top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
          <div className="w-[15vw] h-[15vw] rounded-full flex justify-center items-center bg-zinc-100">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
              >
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full flex justify-center items-center bg-zinc-100">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
              >
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
