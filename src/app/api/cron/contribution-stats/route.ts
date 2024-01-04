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

  
    
    sortedContributions["last-year"] = [];
    for (let i = 0; i < data.contributions.length; i++) {
        const contribution = data.contributions[i];
        const year = contribution.date.split("-")[0];
        if (!sortedContributions[year]) {
            sortedContributions[year] = [];
        }

        sortedContributions[year].push(contribution);
    }

    const todaysDate = new Date();
    // 0 pad month and day
    const month = (todaysDate.getMonth() + 1).toString().padStart(2, "0");
    const day = todaysDate.getDate().toString().padStart(2, "0");
    const todaysDateString = `${todaysDate.getFullYear()}-${month}-${day}`;

    // Find the days before today's date and add them to the last year array
    const todaysYear = todaysDate.getFullYear().toString();
    const thisYearsDays = sortedContributions[todaysYear];
  
    for (const day of thisYearsDays) {
        sortedContributions["last-year"].push(day);
        if (day.date === todaysDateString) {
            break;
        }
    }

    // So now we have all the days until today in the last year array.
    // That means the rest of the days are from the year before.
    // So we have like Jan 1, Jan 2, Jan 3
    // So we can append the end of the previous year's array elements.
    const daysWeNeedFromPreviousYear = 365 - sortedContributions["last-year"].length;
    const previousYear = (todaysDate.getFullYear() - 1).toString();
    const previousYearDays = sortedContributions[previousYear];
    const slicedDays = previousYearDays.slice(previousYearDays.length - daysWeNeedFromPreviousYear);
    sortedContributions["last-year"] = slicedDays.concat(sortedContributions["last-year"]);

    data.total["last-year"] = sortedContributions["last-year"].reduce((acc, curr) => acc + curr.count, 0);


    await kv.set("contributions", JSON.stringify(sortedContributions));
    await kv.set("totals", JSON.stringify(data.total));

    console.log("Updated contributions cache", new Date().toTimeString());

    return Response.json({ sortedContributions });
}