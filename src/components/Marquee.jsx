import './Font.css'

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
        <div id="marquee" className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 uppercase overflow-hidden">
            <h1 className="text-[22vw] pt-10 -mb-[7vw] leading-none">we are ochi</h1>
            <h1 className="text-[22vw] pt-10 -mb-[7vw] leading-none">we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee;