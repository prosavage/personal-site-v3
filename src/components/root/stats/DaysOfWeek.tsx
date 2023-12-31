import React from "react";

interface DaysOfWeekProps {

}

export const DaysOfWeek: React.FC<DaysOfWeekProps> = ({ }) => {
    return (
        <div className="flex flex-col  items-end">
            {["", "", "Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
                <p key={i} className="h-3.5 m-0.5 text-xs">{day}</p>
            ))}
        </div>
    );
};