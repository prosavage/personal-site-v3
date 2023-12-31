import { Contribution, ContributionData } from "@/app/util/Contribution";
import { kv } from "@vercel/kv";

export async function GET() {
    const result = await fetch(
        "https://github-contributions-api.jogruber.de/v4/prosavage",
        {
            cache: "no-store",
        },
    );
    
    const data: ContributionData = await result.json();
    const sortedContributions: Record<string, Contribution[]> = {};

    for (const contribution of data.contributions) {
        const year = contribution.date.split("-")[0];
        if (!sortedContributions[year]) {
            sortedContributions[year] = [];
        }

        sortedContributions[year].push(contribution);
    }

    for (const year in sortedContributions) {
        await kv.set(`contributions-${year}`, JSON.stringify(sortedContributions[year]));
    }

    return Response.json({ sortedContributions });
}