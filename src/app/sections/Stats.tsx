import { Separator } from "@/components/Separator";
import { ContributionChart } from "@/components/root/stats/ContributionChart";
import { cache } from "react";
import { Contribution, ContributionData } from "../util/Contribution";

interface StatsProps {
}

// Using cache to only refresh contributions once per hour.
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-third-party-libraries
export const getContributionData = cache(async () => {
    const fetchOpts = { next: { revalidate: 3600 } };
    const result = await fetch(
        "https://github-contributions-api.jogruber.de/v4/prosavage",
        fetchOpts,
    );

    const data: ContributionData = await result.json();
    const sortedContributions: Record<string, Contribution[]> = {};

    const totals = data.total;



    sortedContributions["last-year"] = [];
    for (let i = 0; i < data.contributions.length; i++) {
        const contribution = data.contributions[i];
        const year = contribution.date.split("-")[0];
        if (!sortedContributions[year]) {
            sortedContributions[year] = [];
        }

        sortedContributions[year].push(contribution);
    }

    const resultLastYear = await fetch(
        "https://github-contributions-api.jogruber.de/v4/prosavage?y=last",
       fetchOpts,
    );

    const lastYearData: ContributionData = await resultLastYear.json();
    sortedContributions["last-year"] = lastYearData.contributions;

    totals["last-year"] = lastYearData.total["lastYear"];

    return [sortedContributions, totals] as const;
});

export const Stats: React.FC<StatsProps> = async ({ }) => {
    const [contributions, totals] = await getContributionData();
    
    return (
        <div className="mt-8">
            <ContributionChart allContributions={contributions} totals={totals}  />
            <Separator/>
        </div>

    );
};
