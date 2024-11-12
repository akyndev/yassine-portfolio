import Marquee from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const reviews = [
  "Branding Strategy & Development",
  "Graphic Design",
  "Social Media Management",
  "Digital Advertising",
  "SEO & Content Optimization",
  "Project Management",
  "Content Creation",
  "Analytics & Report",
  "Client Management",
  "Web Design"
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ text }: { text: string }) => {
  return (
    <span
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl text-xl font-medium border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {text}
    </span>
  )
}

export default function Services() {
  return (
    <div className="container" id="services">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
        What I can Help You With
      </h1>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((text, i) => (
            <ReviewCard key={i} text={text} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((text, i) => (
            <ReviewCard key={i} text={text} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  )
}
