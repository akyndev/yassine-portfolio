import Image from "next/image"
import BlurFade from "./ui/blur-fade"
import coaching from "/public/works/coaching.png"
import future from "/public/works/future.png"
import kroa from "/public/works/kroa.png"
import pitio from "/public/works/pitio.png"
import sushi from "/public/works/sushi.png"
import vinder from "/public/works/vinder.png"

const works = [future, coaching, sushi, kroa, vinder, pitio]

const Work = () => {
  return (
    <div>
      <div className="container" id="works">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white py-6">
        Selected Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((image, i) => (
            <BlurFade delay={0.25} inView yOffset={10} key={i}>
              <div className="w-full h-64 md:h-96 rounded-xl bg-slate-300 relative overflow-hidden group">
                <Image
                  src={image}
                  alt="work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  placeholder="blur"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
