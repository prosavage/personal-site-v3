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


    const contributions = allContributions[year] ?? [];

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

    return (
        // Setting a w-96 width allows it to overflow the parent div and trigger scroll, its a hack but it works, not sure how to make it scroll on its own.
        <div className="flex flex-col items-start">
            <div className="flex w-full">
                <DaysOfWeek />
                <div className="flex flex-col w-full flex-wrap">
                    <ContributionChartNodes year={year} weeks={weeks} />
                    <div className="my-2 flex flex-row item-center justify-between">
                        <Legend />
                        <div className="hidden md:flex flex-row items-center flex-wrap">
                            {getYearsBetween().map((yearIdx) => {
                                return (
                                    <Button
                                        key={yearIdx}
                                        className={`text-sm ml-4 cursor-pointer border-none hover:border-none hover:text-sky-500 ${year === yearIdx ? "underline" : ""}`}
                                        onClick={() => setYear(yearIdx)}
                                    >
                                        {yearIdx}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};