import { Contribution } from "@/app/util/Contribution";
import React from "react";

interface ContributionChartNodesProps {
    weeks: Contribution[][]
    // eslint-disable-next-line no-unused-vars
    setDay: (newDay: Contribution | null) => void 
}

export const ContributionChartNodes: React.FC<ContributionChartNodesProps> = ({  weeks, setDay }) => {
    const getMonthStartWeek = (days: Contribution[]): string | null => {
        // Check if a date has a first day of the month and then extract the month from that.
        for (const day of days) {
            if (day.level === -1) continue;
            const date = new Date(day.date);
            if (date.getDate() === 1) {
                return date.toLocaleDateString("default", { month: "short" });
            }
        }
        
        return null;
    };

    const getColor = (level: number) => {
        switch (level) {
            case -1: return "bg-transparent";
            case 0: return "bg-gray-200 hover:border hover:border-gray-400";
            case 1: return "bg-sky-200 hover:border hover:border-sky-600";
            case 2: return "bg-sky-300 hover:border hover:border-sky-700";
            case 3: return "bg-sky-500 hover:border hover:border-sky-800";
            case 4: return "bg-sky-700 hover:border hover:border-black";
        }
    };


    return (
        <>
            <div className="overflow-x-auto w-full">
                {/* I know width 1px looks WACK, but you need to have a static width so the overflow-x-scroll triggers. Or not use flex, idk. idc. */}
                <div className="w-1"
                    onMouseLeave={() => setDay(null)}
                >
                    <div className="flex">
                        {weeks.map((week, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Compute month based on week number for year */}
                                <p className="h-3.5 w-3.5 m-0.5 text-xs">{getMonthStartWeek(week)}</p>
                                {week.map((day, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setDay(day)}
                                        className={`h-3.5 w-3.5 m-0.5 ${getColor(day.level)} group relative rounded-sm`}>
                                        {/* {day.level !== -1 && (
                                        <div className="absolute hidden group-hover:block w-32 bg-gray-400 text-white text-xs rounded-lg p-2 -mt-14 -ml-16 z-10">
                                            {day.count} contributions on {day.date}
                                        </div>
                                    )} */}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};