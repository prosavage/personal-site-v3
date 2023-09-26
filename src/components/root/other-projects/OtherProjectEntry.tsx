import React from "react"
import { Preview } from "./Preview"
import { Button } from "@/components/Button"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { VscGithub } from "react-icons/vsc"
import { useRouter } from "next/router"

interface OtherProjectEntryProps {
      src: string
      github?: string
      title: string
      description: React.ReactNode
}

export const OtherProjectEntry: React.FC<OtherProjectEntryProps> = ({ src, github, title, description }) => {

      return (
            <div className="flex w-full flex-col">
                  <Preview imgSrc={src} />
                  <div className="flex flex-col w-full mt-4">
                        <div className="flex flex-row justify-between items-center my-2">
                              <p className="text-lg md:text-xl font-bold underline">{title}</p>
                              <div className="flex flex-row items-center">
                                    <Button onClick={() => window.location.href = src} icon={<HiOutlineGlobeAlt />} className={"mr-1"}> Website</Button>
                                    {github && <Button onClick={() => window.location.href = github} icon={<VscGithub />} className={"ml-1"}>Github</Button>}
                              </div>
                        </div>
                        <div>
                              {description}
                        </div>
                  </div>
            </div>
      );
}