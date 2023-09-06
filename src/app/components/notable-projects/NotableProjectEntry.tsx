"use client";
import React, { useEffect } from "react"
import { ArrowRight } from "./ArrowRight";
import { useRouter } from "next/navigation"

interface NotableProjectProps {
      title: string,
      children: React.ReactNode
      href: string
}

export const NotableProjectEntry: React.FC<NotableProjectProps> = ({
      title, children, href
}) => {
      const router = useRouter()

      useEffect(() => {
            router.prefetch(href)
      }, [])
      return (
            <div
                  onClick={() => router.push(href)}
                  className="flex flex-col w-full border-2 border-dashed hover:border-solid rounded-md border-gray-300 mt-4 p-2 cursor-pointer group"
            >
                  <p className="text-xl underline font-semibold group-hover:decoration-sky-500 ease-in-out duration-200">{title}</p>
                  {children}
                  <div className="flex flex-row justify-end w-full">
                        <p className="mr-1 hidden group-hover:block group-hover:text-sky-500 ease-in-out duration-200">Learn More</p>
                        <ArrowRight className={"w-6 h-6 group-hover:text-sky-500 self-end ease-in-out duration-200 group-hover:animate-[bounceRight_1s_ease-in-out_infinite]"} />
                  </div>
            </div>
      );
}