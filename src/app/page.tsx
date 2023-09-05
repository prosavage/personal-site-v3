import { Hero } from "./sections/Hero";
import { NotableProjects } from "./sections/NotableProjects";

export default function Home() {

  return (
      <div className="max-w-4xl">
        <Hero />
        <NotableProjects />
      </div>
  )
}
