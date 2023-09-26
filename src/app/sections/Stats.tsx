import { Separator } from "@/components/Separator";
import React, { Fragment } from "react"


interface StatsProps {

}

export const Stats: React.FC<StatsProps> = ({ }) => {
      return (
            <Fragment>
                  <div className="flex flex-col items-start w-full mt-8">
                        <p className="h-10 text-xl md:text-2xl font-bold">Github Stats</p>
                        
                  </div>
                  <Separator className="mt-16" />
            </Fragment>
      );
}