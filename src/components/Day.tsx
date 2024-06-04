import { DayType } from "@/types";

export default function Day(day: DayType) {
    return (
        <div
            className={
                day.isCurrent ?
                    `day-cell current-day` :
                    "day-cell"
            }>
            {day.value}
        </div>
    );
}