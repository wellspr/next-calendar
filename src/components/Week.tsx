import { weekdays } from "@/utils";
import Weekday from "./Weekday";

export default function Week({ miniature = false }: { miniature?: boolean }) {
    return weekdays.map(weekday => {
        return (
            <Weekday
                key={weekday}
                weekday={{ value: weekday }}
                miniature={miniature}
            />
        );
    });
}