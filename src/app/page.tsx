"use client"

import Month from "@/components/Month";
import { fullStringDate, months } from "@/utils";
import { useCallback, useState } from "react";

export default function Home() {

	const today = new Date();

	const [day, setDay] = useState<number>(today.getDate());
	const [month, setMonth] = useState<number>(today.getMonth());
	const [year, setYear] = useState<number>(today.getFullYear());

	const restore = () => {
		setDay(today.getDate());
		setMonth(today.getMonth());
		setYear(today.getFullYear());
	};

	const nextMont = useCallback(() => {
		if (month < 11) {
			setMonth(month + 1);
		} else {
			setMonth(0);
			setYear(year + 1);
		}
	}, [month, year]);

	const prevMonth = useCallback(() => {
		if (month > 0) {
			setMonth(month - 1);
		} else {
			setMonth(11);
			setYear(year - 1);
		}
	}, [month, year]);

	const nextYear = useCallback(() => {
		setYear(year + 1)
	}, [year]);

	const prevYear = useCallback(() => {
		setYear(year - 1);
	}, [year]);

	return (
		<div className="container">
			<header className="header">
				<h1 className="header-heading">Calendário</h1>
				<div id="today" className="today">
					{ fullStringDate(today) }, { today.toTimeString() }
				</div>
				<div id="currentDate" className="currentDate">
					<div className="wrapper">
						<button onClick={prevMonth}>{"<"}</button>
						<div className="currentMonth">{months[month]}</div>
						<select className="currentMonthSelect hidden"></select>
						<button onClick={nextMont}>{">"}</button>
					</div>
					<div className="wrapper">
						<button onClick={prevYear}>{"<"}</button>
						<div className="currentYear">{year}</div>
						<input
							type="number"
							id="currentYearInput"
							className="currentYearInput hidden"
						/>
						<button onClick={nextYear}>{">"}</button>
					</div>
					<div className="wrapper">
						<button onClick={restore}>Restaurar</button>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="calendar-box">
					<Month date={{ day, month, year }} />
				</div>
			</main >
		</div>
	);
}
