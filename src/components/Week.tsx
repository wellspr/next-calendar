import { weekdays } from "@/utils";
import Weekday from "./Weekday";

export default function Week() {
    return weekdays.map(weekday => {
        return <Weekday key={weekday} value={weekday} />
    });
}