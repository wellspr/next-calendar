import { WeekdayType } from "@/types";

export default function Weekday({ miniature, weekday }: {weekday: WeekdayType, miniature: boolean}) {
    return (
        <div className="weekday-cell">
            {
                miniature ?
                    weekday.value[0] :
                    weekday.value
            }
        </div>
    );
}