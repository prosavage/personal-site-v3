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
                              <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-1 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                    {tag}
                              </span>
                        ))}
                  </div>
                  <img src={"/hero-seperator.svg"} alt={"hero-seperator-border"} className={"w-full h-[4px] my-2"} />
                  <p className="my-2 font-medium text-lg md:text-xl">Posted on {dateStr}</p>
                  <div className="prose prose-slate sm:prose-xl md:prose-2xl lg:max-w-prose">
                        {children}
                  </div>
            </div>
      );
}