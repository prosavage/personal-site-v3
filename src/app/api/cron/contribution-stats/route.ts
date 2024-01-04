import { Contribution, ContributionData } from "@/app/util/Contribution";
import { kv } from "@vercel/kv";

export const fetchCache = "force-no-store";

export async function GET() {
    const result = await fetch(
        "https://github-contributions-api.jogruber.de/v4/prosavage",
        {
            cache: "no-store",
        },
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
        {
            cache: "no-store",
        },
    );

    const lastYearData: ContributionData = await resultLastYear.json();
    sortedContributions["last-year"] = lastYearData.contributions;

    totals["last-year"] = lastYearData.total["lastYear"];

    await kv.set("contributions", JSON.stringify(sortedContributions));
    await kv.set("totals", JSON.stringify(totals));

    const timestamp = new Date().toTimeString();
    console.log("Updated contributions cache", timestamp);

    return Response.json({ sortedContributions, totals, timestamp });
}