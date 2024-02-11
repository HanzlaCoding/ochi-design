import { useState, useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      console.log("mouse x and y:", mouseX, mouseY);

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      console.log("delta x and y:", deltaX, deltaY);

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      console.log(angle);
      setRotate(angle - 180);
      console.log("rotate:", rotate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rotate]);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div  data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center" style={{backgroundImage: `url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')`}}>
        <div className="absolute flex justify-between items-center gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-100">
            <div className="relative w-2/3 h-2/3 bg-gray-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2"
              >
                <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-100">
            <div className="relative w-2/3 h-2/3 bg-gray-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2"
              >
                <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
