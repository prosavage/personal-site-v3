import { Separator } from "@/components/Separator";
import { ContributionChart } from "@/components/root/stats/ContributionChart";
import { cache } from "react";
import { ContributionData } from "../util/Contribution";

interface StatsProps {
}

// Using cache to only refresh contributions once per hour.
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-third-party-libraries
export const getContributionData = cache(async () => {
    const fetchOpts = { next: { revalidate: 3600 } };
    const result = await fetch(
        "https://gh-contributions-chart-data.fly.dev/contributions/prosavage",
        fetchOpts,
    );

    const data: ContributionData = await result.json();
    
    const sortedContributions = data.contributions;
    const totals = data.totals;
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
