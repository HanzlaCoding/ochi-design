import { animate, delay, motion } from "framer-motion";
import "./Font.css";
import { Power4 } from "gsap/all";
import { useState } from "react";

function Featured() {
  let [isHovering, setHovering] = useState(false);
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-6xl tracking-tight font-['Neue_Montreal']">
          Featured products
        </h1>
      </div>
      <div className="px-20 mt-14">
        <div className="cards w-full flex gap-10">
          <div
            onMouseEnter={() => {
              return setHovering(true);
            }}
            onMouseLeave={() => {
              return setHovering(false);
            }}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className="cardh1 absolute left-full flex overflow-hidden text-8xl -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter">
              <h1 className="cardh1 absolute right-full text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter">
                {/* FYDE */}
                {"FYDE".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0%" } : { y: "100%" }}
                    transition={{ ease: Power4.easeInOut, delay: index *.6 }}
                    className="inline-block"
                    key={index}
                  >
                    {items}
                  </motion.span>
                ))}
              </h1>
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[75vh]rounded-xl">
            <div className="card w-full h-full rounded-xl overflow-hidden bg-[#F1F1F1]">
              <h1 className="cardh1 absolute right-full text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter">
                {"VISE".split("").map((items, index) => (
                  <span key={index}>{items}</span>
                ))}
              </h1>
              <img
                className="h-full w-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
