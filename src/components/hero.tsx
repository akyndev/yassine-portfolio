import { Dot } from "lucide-react"
import Image from "next/image"
import yassine from "/public/yassine.png"

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
          <div className=" w-full md:w-7/12 space-y-5">
            <div className="flex items-center justify-start text-lg">
              <Dot color="green" size={44} />
              <span className="motion-preset-typewriter-[24]">Available for work</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold">Boosting Brands with Strategy and Creativity</h1>
              <p className="text-base md:text-lg text-black/60">
                Dynamic Branding & Digital Marketing Manager with 5+ years of success in building impactful brands and
                driving growth through data-driven insights and creative leadership.
              </p>
            </div>

            <div className="relative border  border-yellow-600 cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-xl hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Let&apos;s Talk
              </span>
            </div>
          </div>

          <div className="md:w-5/12 w-8/12">
            <Image src={yassine} alt="Yassine chaoua" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
