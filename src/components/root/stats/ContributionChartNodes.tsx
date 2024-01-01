import { Contribution } from "@/app/util/Contribution";
import React, { useState } from "react";

interface ContributionChartNodesProps {
    year: number
    weeks: Contribution[][]
    setDay: (newDay: Contribution | null) => void 
}

export const ContributionChartNodes: React.FC<ContributionChartNodesProps> = ({ year, weeks, setDay }) => {
    const firstDayOfYear = new Date(year, 0, 1);
    const getMonthStartWeek = (weekNumber: number): string | null => {
        const firstDayOfWeek = new Date(year, 0, (weekNumber - 1) * 7 - firstDayOfYear.getDay() + 1);
        const lastDayOfPreviousMonth = new Date(firstDayOfWeek);
        lastDayOfPreviousMonth.setDate(0); // Go to the last day of the previous month

        if (firstDayOfWeek.getDate() <= 7 && firstDayOfWeek.getMonth() !== lastDayOfPreviousMonth.getMonth()) {
            return firstDayOfWeek.toLocaleString("default", { month: "long" }).slice(0, 3);
        }

        return null;
    };

    const getColor = (level: number) => {
        switch (level) {
            case -1: return "bg-transparent";
            case 0: return "bg-gray-200";
            case 1: return "bg-sky-200";
            case 2: return "bg-sky-300";
            case 3: return "bg-sky-500";
            case 4: return "bg-sky-700";
        }
    };


    return (
        <>
            <div className="overflow-x-scroll w-full">
                {/* I know width 1px looks WACK, but you need to have a static width so the overflow-x-scroll triggers. Or not use flex, idk. idc. */}
                <div className="w-1"
                    onMouseLeave={() => setDay(null)}
                >
                    <div className="flex">
                        {weeks.map((week, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Compute month based on week number for year */}
                                <p className="h-3.5 w-3.5 m-0.5 text-xs">{getMonthStartWeek(index + 1)}</p>
                                {week.map((day, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setDay(day)}
                                        className={`h-3.5 w-3.5 m-0.5 ${getColor(day.level)} group relative rounded-sm ${day.level !== -1 && "hover:border hover:border-sky-950"}`}>
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