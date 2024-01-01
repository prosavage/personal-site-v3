"use client";
import React, { cache, useEffect } from "react";
import { Legend } from "./Legend";
import { Contribution } from "@/app/util/Contribution";
import { Button } from "@/components/Button";
import { DaysOfWeek } from "./DaysOfWeek";
import { ContributionChartNodes } from "./ContributionChartNodes";

interface ContributionChartProps {
    allContributions: Record<string, Contribution[]>
}



export const ContributionChart: React.FC<ContributionChartProps> = ({ allContributions }) => {

    const [year, setYear] = React.useState<number>(new Date().getFullYear());


    const contributions = [...allContributions[year]] ?? [];

    // create new date object from year
    const firstDayOfYear = new Date(year, 0, 1);
    const startDayOfWeek = firstDayOfYear.getDay();

    for (let i = 0; i < startDayOfWeek; i++) {
        contributions.unshift({ date: "", count: 0, level: -1 });
    }

    const weeks: Contribution[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }



    const getYearsBetween = () => {
        // Return array of years between 2017 and current year
        const years = [];
        for (let i = 2017; i <= new Date().getFullYear(); i++) {
            years.push(i);
        }
        return years;
    };

    const [day, setDay] = React.useState<Contribution | null>(null);

    const daySummary = () => {
        if (day === null) return "Hover over a day to see my contributions.";
        const dateStr = new Date(day.date).toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
        if (day.count === 0) return `I didn't make any contributions on this ${dateStr}.`;
        return `I made ${day.count} contributions on ${dateStr}`;
    };

    return (
        <>
            <p className="h-10 text-lg md:text-xl font-semibold">GitHub Statistics in {year}</p>
            <p>{daySummary()}</p>
            <div className="flex flex-col items-start">
                <div className="flex w-full">
                    <DaysOfWeek />
                    <div className="flex flex-col w-full flex-wrap">
                        <ContributionChartNodes year={year} weeks={weeks} setDay={(newDay) => setDay(newDay)} />
                        <div className="my-2 flex flex-row item-center justify-between">
                            <Legend />
                            <div className="flex flex-row items-center justify-center flex-wrap">
                                <select
                                    className="text-sm ml-4 cursor-pointer border-none hover:border-none bg-transparent underline"
                                    onChange={(e) => setYear(parseInt(e.target.value))}
                                >
                                    {getYearsBetween().reverse().map((yearIdx) =>
                                        <option key={yearIdx} value={yearIdx}>{yearIdx}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};