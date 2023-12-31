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
    let contributions = await kv.get<Record<string, Contribution[]>>("contributions");
    if (!contributions) contributions = {};
    return contributions;
});

export const Stats: React.FC<StatsProps> = async ({ }) => {
    const contributions = await getContributionData();
    
    return (
        <div className="mt-8">
            <ContributionChart allContributions={contributions}  />
            <Separator className="mt-16" />
        </div>

    );
};
