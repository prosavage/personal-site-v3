import React from "react"
import { NotableProjectEntry } from "../components/notable-projects/NotableProjectEntry";
import { Link } from "@/components/Link";

interface NotableProjectsProps {

}

export const NotableProjects: React.FC<NotableProjectsProps> = ({ }) => {
      return (
            <div className="flex flex-col items-start w-full mt-8">
                  <p className="h-10 text-xl md:text-2xl font-bold">Notable Projects</p>
                  <NotableProjectEntry title={"EnigmaPool"} href={"/projects/enigmapool"}>
                        <p>In this landmark project, I developed a cryptocurrency mining pool that enables individual miners to combine their computational resources. This collective power not only increases their chances of mining blocks but also ensures more frequent rewards, distributed according to each miner&apos;s contribution.</p>
                  </NotableProjectEntry>
            </div>
      );
}