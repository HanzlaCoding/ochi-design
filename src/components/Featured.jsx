import { motion, useAnimation } from "framer-motion";
import "./Font.css";

function Featured() {
  const all = [useAnimation(),useAnimation()]
  const handleHover= (index) => {
    all[index].start({y:"0"})
  } 
  const handleHoverEnd= (index) => {
    all[index].start({y:"100%"})
  } 
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-6xl tracking-tight font-['Neue_Montreal']">
          Featured products
        </h1>
      </div>
      <div className="px-20 mt-14">
        <div className="cards w-full flex gap-10">
          <motion.div onHoverStart={()=>{handleHover(0)}} onHoverEnd={()=>{handleHoverEnd(0)}} className="card-container relative w-1/2 h-[75vh]">
              <h1 className="cardh1 flex absolute right-0 overflow-hidden text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter w-52 h-16">
                {"FYDE".split("").map((items, index) => (
                  <motion.span
                  initial={{y:"100%"}}
                  animate={all[0]}
                  transition={{ease: [0.64, 0, 0.78, 0], delay:index*.05}}
                    key={index}
                  >
                    {items}
                  </motion.span>
                ))}
              </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>{handleHover(1)}} onHoverEnd={()=>{handleHoverEnd(1)}} className="card-container relative w-1/2 h-[75vh]rounded-xl">
            <div className="card w-full h-full rounded-xl overflow-hidden bg-[#F1F1F1]">
              <h1 className="cardh1 absolute flex overflow-hidden right-full text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter w-52 h-16">
                {"VISE".split("").map((items, index) => (
                  <motion.span
                  initial={{y:"100%"}}
                  animate={all[1]}
                  transition={{ease: [0.64, 0, 0.78, 0], delay:index*.05}}
                    key={index}
                  >
                    {items}
                  </motion.span>
                ))}
              </h1>
              <img
                className="h-full w-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
