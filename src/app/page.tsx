import { Hero } from "./sections/Hero";
import { NotableProjects } from "./sections/NotableProjects";
import { Stats } from "./sections/Stats";

// Revalidate this page every hour for github contributions data.
export const revalidate = 3600;

export default function Home({}) {


    return (
        <div className="max-w-5xl">
            <Hero />
            <Stats />
            <NotableProjects />
        </div>
    );
}