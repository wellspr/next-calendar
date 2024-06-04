import { WeekdayType } from "@/types";

export default function Weekday(weekday: WeekdayType) {
    return (
        <div className="weekday-cell">
            { weekday.value }
        </div>
    );
}