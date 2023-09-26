import { Hero } from "./sections/Hero";
import { NotableProjects } from "./sections/NotableProjects";
import { OtherProjects } from "./sections/OtherProjects";

export default function Home() {

  return (
    <div className="max-w-5xl">
      <Hero />
      {/* <Stats/> */}
      <NotableProjects />
      <OtherProjects />
    </div>
  )
}
 