import { months } from "@/utils";
import { useEffect, useRef } from "react";

export default function MonthSelector({
    month,
    setMonth,
    nextMonth,
    prevMonth,
    editable,
    setEditable
}: {
    month: number,
    setMonth: React.Dispatch<React.SetStateAction<number>>
    nextMonth: () => void,
    prevMonth: () => void,
    editable: boolean,
    setEditable: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const ref = useRef<HTMLSelectElement>(null);

    useEffect(() => {
		const onBodyClick = (e: MouseEvent) => {
			const currentSelect = ref.current;

			if (editable) {
				if (currentSelect) {
					if (!currentSelect.contains(e.target as Node)) {
						setEditable(false);
					}
				}
			}
		};

		document.body.addEventListener("click", onBodyClick);

		return () => {
			document.body.removeEventListener("click", onBodyClick);
		}
	}, [editable, setEditable]);

    return (
        <div className="monthSelector">
            <button onClick={prevMonth}>{"<"}</button>
            {editable ?
                <select
                    ref={ref}
                    className="currentMonthSelect"
                    value={months[month]}
                    onChange={(e) => {
                        setMonth(months.indexOf(e.target.value))
                    }}>
                    {
                        months.map(m => {
                            return (
                                <option
                                    key={m}
                                    value={m}
                                    label={m}
                                    onClick={() => {
                                        setEditable(false);
                                    }}
                                />
                            );
                        })
                    }
                </select> :
                <div
                    className="currentMonth"
                    onClick={() => setEditable(true)}>
                    {months[month]}
                </div>
            }
            <button onClick={nextMonth}>{">"}</button>
        </div>
    );
}