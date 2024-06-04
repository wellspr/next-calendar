import { DateType } from "@/types";
import { isLeapYear } from "@/utils";
import Day from "./Day";
import Week from "./Week";

export default function Month({ date, miniature }: { date: DateType, miniature?: boolean }) {

    const { month, day, year } = date;
    const firstWeekday = new Date(`${month + 1}/01/${year}`).getDay();

    const februarySpan = (year: number) => {
        return isLeapYear(year) ? 29 : 28;
    };

    const monthSpan = [31, februarySpan(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const calendarSpan = firstWeekday + monthSpan[month];

    const numberOfCells = calendarSpan % 7 === 0 ?
        calendarSpan :
        Math.ceil(calendarSpan / 7) * 7;

    const arr: { cell: number, day: number | undefined, isCurrentDay: boolean }[] = [];

    for (let i = 0; i < numberOfCells; i++) {
        arr.push({ cell: i, day: undefined, isCurrentDay: false });
    }

    let dayNumberValue = 0;

    for (let i = firstWeekday; i < calendarSpan; i++) {
        dayNumberValue++;
        arr[i].day = dayNumberValue;

        if (dayNumberValue === day) {
            arr[i].isCurrentDay = true;
        }
    };

    const generatedCells = arr.map(({ cell, day, isCurrentDay }) => {
        if (day) {
            return <Day key={cell} value={day} isCurrent={isCurrentDay} />
        }

        return <div key={cell} className="day-cell day-cell__empty"></div>
    });

    return (
        <div className="month">
            <div className="month__header">
                <Week miniature={miniature} />
            </div>
            <div className="month__body">
                {generatedCells}
            </div>
            <div className="month__footer"></div>
        </div>
    );
}