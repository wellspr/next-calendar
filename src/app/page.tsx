"use client"

import { useCallback, useEffect, useMemo, useState } from "react";
import Month from "@/components/Month";
import MonthSelector from "@/components/MonthSelector";
import Timestring from "@/components/Timestring";
import YearSelector from "@/components/YearSelector";
import { months } from "@/utils";

export default function Home() {

	const today = useMemo(() => new Date(), []);

	const [day, setDay] = useState<number>(today.getDate());
	const [month, setMonth] = useState<number>(today.getMonth());
	const [year, setYear] = useState<number>(today.getFullYear());

	const restore = () => {
		setDay(today.getDate());
		setMonth(today.getMonth());
		setYear(today.getFullYear());
	};

	const nextMonth = useCallback(() => {
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

	const [yearEditable, setYearEditable] = useState<boolean>(false);
	const [monthEditable, setMonthEditable] = useState<boolean>(false);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				monthEditable && setMonthEditable(false);
				yearEditable && setYearEditable(false);
			}
		};

		document.body.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.removeEventListener("keydown", onKeyDown);
		}
	}, [monthEditable, yearEditable]);

	return (
		<div className="container">
			<header className="header">
				<h1 className="header-heading">Calendário</h1>
				<div id="today" className="today">
					{today.getDate()} de {months[today.getMonth()]} de {today.getFullYear()}, <Timestring />
				</div>
				<div id="currentDate" className="currentDate">
					<div className="wrapper">
						<MonthSelector
							editable={monthEditable}
							month={month}
							nextMonth={nextMonth}
							prevMonth={prevMonth}
							setEditable={setMonthEditable}
							setMonth={setMonth}
						/>
					</div>
					<div className="wrapper">
						<YearSelector
							editable={yearEditable}
							nextYear={nextYear}
							prevYear={prevYear}
							setEditable={setYearEditable}
							setYear={setYear}
							year={year}
						/>
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

				<div className="calendar-year">
					{
						months.map(m => {
							return (
								<div className="calendar-year__month" key={m}
								onClick={() => setMonth(months.indexOf(m))}>
									<div className="calendar-year__month__name">{ m } {year}</div>
									<Month date={{ day, month: months.indexOf(m), year }} miniature={true} />
								</div>
							);
						})
					}
				</div>
			</main >
			<footer className="footer">
				<p>&copy; 2024 - Made by Paulo</p>
			</footer>
		</div>
	);
}
