import { Separator } from "@/components/Separator";
import { ContributionChart } from "@/components/root/stats/ContributionChart";
interface StatsProps {

}

export const Stats: React.FC<StatsProps> = ({  }) => {

    return (
        <div className="mt-8">
            <p className="h-10 text-lg md:text-xl font-semibold">My contributions on GitHub</p>
            <ContributionChart  />
            <Separator className="mt-16" />
        </div>

    );
};
