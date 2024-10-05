"use client";
import React from "react";
import { Legend } from "./Legend";
import { Contribution } from "@/app/util/Contribution";
import { Button } from "@/components/Button";
import { DaysOfWeek } from "./DaysOfWeek";
import { ContributionChartNodes } from "./ContributionChartNodes";

interface ContributionChartProps {
    allContributions: Record<string, Contribution[]>
    totals: Record<string, number>
}

const LAST_YEAR = "last_year";
export const ContributionChart: React.FC<ContributionChartProps> = ({ allContributions, totals }) => {
    const [year, setYear] = React.useState<string>(LAST_YEAR);
    const [day, setDay] = React.useState<Contribution | null>(null);


    // Memoize contributions calculation
    const weeks = React.useMemo(() => {
        const contributionsForYear = allContributions[year] ?? [];
        const contributionsCopy = Array.from(contributionsForYear);

        const yearForChart =
            year === LAST_YEAR ? new Date().getFullYear() - 1 : parseInt(year);

        // Create new date object from year
        let firstDayOfYear = new Date(yearForChart, 0, 1);
        if (year === LAST_YEAR) {
            if (contributionsCopy.length > 0) {
                firstDayOfYear = new Date(contributionsCopy[0].date);
                firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
            }
        }

        const startDayOfWeek = firstDayOfYear.getDay();

        // Add filler contributions at the start
        for (let i = 0; i < startDayOfWeek; i++) {
            contributionsCopy.unshift({ date: "", count: 0, level: -1 });
        }

        // Build weeks array
        const weeks: Contribution[][] = [];
        for (let i = 0; i < contributionsCopy.length; i += 7) {
            weeks.push(contributionsCopy.slice(i, i + 7));
        }

        return weeks;
    }, [allContributions, year]);

    const getYearsBetween = () => {
        // Return array of years between 2017 and current year
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = 2017; i <= currentYear; i++) {
            years.push(i);
        }
        return years;
    };

    const daySummary = () => {
        // If level is -1, then it's a filler block for the start of the year.
        if (day === null || day.level === -1)
            return "Hover over a day to see my contributions.";

        const dateParsed = new Date(day.date);
        dateParsed.setDate(dateParsed.getDate() + 1);
        const dateStr = dateParsed.toLocaleDateString("default", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });

        if (day.count === 0) return `No contributions on ${dateStr}.`;
        return `${day.count} contributions on ${dateStr}.`;
    };

    const getYearStr = () => {
        if (year === LAST_YEAR) return "the last year";
        return year;
    };

    return (
        <>
            <p className="text-lg md:text-xl font-semibold text-wrap">{totals[year]} GitHub Contributions in {getYearStr()}.</p>
            <p>{daySummary()}</p>
            <div className="flex flex-col items-start">
                <div className="flex w-full">
                    <DaysOfWeek />
                    <div className="flex flex-col w-full flex-wrap">
                        <ContributionChartNodes
                            weeks={weeks}
                            setDay={(newDay) => setDay(newDay)}
                        />
                        <div className="my-2 flex flex-row item-center justify-between">
                            <Legend />
                            <div className="flex flex-row items-center justify-center flex-wrap">
                                {/* These are being rendered on any screens smaller than large. */}
                                <select
                                    className="block lg:hidden text-sm ml-4 cursor-pointer border-none hover:border-none bg-transparent underline"
                                    onChange={(e) => setYear(e.target.value)}
                                >
                                    <option value={LAST_YEAR}>Last Year</option>
                                    {getYearsBetween().reverse().map((yearIdx) =>
                                        <option key={yearIdx} value={yearIdx}>{yearIdx}</option>
                                    )}
                                </select>
                                {/* These are being rendered on large screens since all the options fit inline. */}
                                {getYearsBetween().map((yearIdx) => {
                                    return (
                                        <Button
                                            key={yearIdx}
                                            className={`hidden lg:block text-sm ml-4 cursor-pointer border-none hover:border-none hover:text-sky-500 ${year === yearIdx.toString() ? "underline" : ""}`}
                                            onClick={() => setYear(yearIdx.toString())}
                                        >
                                            {yearIdx}
                                        </Button>
                                    );
                                })}
                                <Button
                                    className={`hidden lg:block text-sm ml-4 cursor-pointer border-none hover:border-none hover:text-sky-500 ${year === LAST_YEAR ? "underline" : ""}`}
                                    onClick={() => setYear(LAST_YEAR)}
                                >
                                    Last Year
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};