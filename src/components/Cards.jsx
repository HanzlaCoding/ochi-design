function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center px-20 gap-5">
      <div className="card-container h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004d43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 text-sm py-2 px-6 text-[#CDEA68] rounded-full border-[#CDEA68] border-[1px]">
            ©2019-2024
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card  relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 text-sm py-2 px-6 text-[#CDEA68] rounded-full border-[#CDEA68] border-[1px]">
            ©2019-2024
          </button>
        </div>
        <div className="card  relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 text-sm py-2 px-6 text-[#CDEA68] rounded-full border-[#CDEA68] border-[1px]">
            ©2019-2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
