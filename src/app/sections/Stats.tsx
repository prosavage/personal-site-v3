import { Separator } from "@/components/Separator";
import { ContributionChart } from "@/components/root/stats/ContributionChart";
import { kv } from "@vercel/kv";
import { cache } from "react";
import { Contribution } from "../util/Contribution";

interface StatsProps {
}

// Using cache to only refresh contributions once per hour.
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-third-party-libraries
export const getContributionData = cache(async () => {
    const contributions = (await kv.get<Record<string, Contribution[]>>("contributions")) ?? {};
    const totals = (await kv.get<Record<string, number>>("totals")) ?? {};

    return [contributions, totals] as const;
});

export const Stats: React.FC<StatsProps> = async ({ }) => {
    const [contributions, totals] = await getContributionData();
    
    return (
        <div className="mt-8">
            <ContributionChart allContributions={contributions} totals={totals}  />
            <Separator className="mt-16" />
        </div>

    );
};
