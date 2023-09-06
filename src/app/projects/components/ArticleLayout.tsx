import { Link } from "@/components/Link"
import React from "react"

interface ArticleLayoutProps {
      children: React.ReactNode
      title: string
      tags: string[]
      dateStr: string
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({ title, children, tags, dateStr }) => {
      return (
            <div className="max-w-7xl">
                  <p className="text-4xl md:text-6xl font-semibold">{title}</p>
                  <div className="flex flex-row flex-wrap align-center my-4">
                        {tags.map((tag) => (
                              <span key={tag} className="bg-sky-600 text-white text-sm font-medium mr-2 mb-1 px-2.5 py-0.5 rounded ">
                                    {tag}
                              </span>
                        ))}
                  </div>
                  <img src={"/hero-seperator.svg"} alt={"hero-seperator-border"} className={"w-full h-[4px] my-2"} />
                  <div className="flex flex-row align-center justify-between">
                        <Link href={"/"}><p className="my-2 font-medium text-lg md:text-xl">Home</p></Link>
                        <p className="my-2 font-medium text-lg md:text-xl">Posted on {dateStr}</p>
                  </div>
                  <div className="my-4 prose prose-slate sm:prose md:prose-xl lg:max-w-prose">
                        {children}
                  </div>
                  <img src={"/hero-seperator.svg"} alt={"hero-seperator-border"} className={"w-full h-[4px] my-2"} />
                  <div className="flex flex-row align-center justify-between">
                        <Link href={"/"}><p className="my-2 font-medium text-lg md:text-xl">Home</p></Link>
                        <p className="my-2 font-medium text-lg md:text-xl">Posted on {dateStr}</p>
                  </div>
            </div>
      );
}