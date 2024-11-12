import { BentoGrid, BentoGridItem } from "./ui/bento-grid"

const About = () => {
  return (
    <div className="container" id="about">
      <BentoGrid className="mx-auto">
        <BentoGridItem>
          <h2 className="font-medium text-lg">Work Experience</h2>
          <div className="space-y-4">
            <div className="flex gap-10">
              <span className="font-medium text-lg text-muted-foreground">2019 - Present</span>
              <div>
                <h2 className="font-bold text-lg">GOL Linhas Aéreas </h2>
                <h2 className="text-muted-foreground">Search Engine Optimization Team Lead</h2>
              </div>
            </div>
            <div className="flex gap-10">
              <span className="font-medium text-lg text-muted-foreground">2020 - Present</span>
              <div>
                <h2 className="font-bold text-lg">COCO Labs Company</h2>
                <h2 className="text-muted-foreground">Social Media Manager</h2>
              </div>
            </div>
            <div className="flex gap-10">
              <span className="font-medium text-lg text-muted-foreground">2022 - Present</span>
              <div>
                <h2 className="font-bold text-lg">Prosign Team Agency</h2>
                <h2 className="text-muted-foreground">Group Manager (Graphic Design Team)</h2>
              </div>
            </div>
            <div className="flex gap-10">
              <span className="font-medium text-lg text-muted-foreground">2023 - Present</span>
              <div>
                <h2 className="font-bold text-lg">New Digital Way (NDW)</h2>
                <h2 className="text-muted-foreground">Senior Graphic Designer & Brand Strategist</h2>
              </div>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem>
          <h2 className="font-medium text-lg">Education</h2>
          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-lg">Bachelor&apos;s in Management Sciences </h2>
              <h2 className="text-muted-foreground">Bachelor&apos;s degree in Management Sciences Completed in 2017</h2>
            </div>
            <div>
              <h2 className="font-bold text-lg">Master&apos;s in Business Administration Management</h2>
              <h2 className="text-muted-foreground">
                Master&apos;s degree in Business Administration Management Completed in 2019
              </h2>
            </div>
            <div>
              <h2 className="font-bold text-lg">A+A Diploma in Graphic Design and Content Management</h2>
              <h2 className="text-muted-foreground">
                A+A Diploma in Graphic Design and Content Management Completed in 2021
              </h2>
            </div>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </div>
  )
}

export default About
